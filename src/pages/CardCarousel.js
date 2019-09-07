import React, { useState } from 'react'
import styled from 'styled-components'

// seeded random number
function random(seed) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}
// 17, 18
const randColor = (seed) => Math.floor(random(seed + 19) * 16777215).toString(16)

const CardCarousel = props => {
  const [data, setData] = useState([
    '(0deg)', '(40deg)', '(80deg)', 1,2,3,5,6,7,9,10,11
  ])
  const [orientation, setOrientation] = useState(0)

  const interval = 360 / data.length
  // docuement.width / data.
  // var tz = Math.round((cellsize / 2) / Math.tan(Math.PI / data.length))

  // make each cell it's own scene and then you can get them to face forward

  return (
    <Container>
      <Scene>
        <Carousel orientation={orientation}>
          {data.map((el, i) => {
            return (
              <Cell key={el} color={randColor(i)}
                rotate={interval * i}
                onClick={e => setOrientation(-(interval * i))}>
                {i}
              </Cell>
            )
          })}
        </Carousel>
      </Scene>
    </Container>
  )
}

export default CardCarousel

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const Scene = styled.div`
  perspective: 450px;
  border: 1px solid gray;
  height: 200px;
  width: 200px;
`

const size = 600

const Carousel = styled.div`
  display: grid;
  transform-style: preserve-3d;
  height: 100%;
  transform: translateZ(-${size}px) rotateY(${props => props.orientation}deg);
  transition: all 2s;
`

const Cell = styled.div`
  position: relative;
  opacity: 0.5;
  grid-area: 1 / 1 / span 1 / span 1;
  background: #${props => props.color};
  transform: rotateY(${props => props.rotate}deg) translateZ(${size}px);
  color: white;
  font-size: 2.5rem;
  /* rotateY(${props => props.rotate * -1}deg) */
`
