import React, { useState } from 'react'
import styled from 'styled-components'

// seeded random number
function random(seed) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}
const randColor = (seed) => Math.floor(random(seed + 1) * 16777215).toString(16)

const CardCarousel = props => {
  const [data, setData] = useState([
    'rotateY(0deg)', 'rotateY(40deg)', 'rotateY(80deg)', 'rotateY(120deg)', 'rotateY(160deg)',
    'rotateY(200deg)', 'rotateY(240deg)', 'rotateY(280deg)', 'rotateY(320deg)'
  ])
  const [orientation, setOrientation] = useState('rotateY(0deg)')

  // docuement.width / data.
  // var tz = Math.round((cellsize / 2) / Math.tan(Math.PI / data.length))

  return (
    <Container>
      <Scene>
        <Carousel orientation={orientation}>
          {data.map((el, i) => {
            return (
              <Cell color={randColor(i)} rotate={el}
                onClick={e => setOrientation(`rotateY(${i * 40}deg)`)}>
                  card caroselcard caroselcard 
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
  height: 100px;
  width: 100px;
`

const Carousel = styled.div`
  display: grid;
  transform-style: preserve-3d;
  height: 100%;
  transform: translateZ(-220px) ${props => props.orientation};
  transition: all 2s;
`

const Cell = styled.div`
  opacity: 0.5;
  grid-area: 1 / 1 / span 1 / span 1;
  background: #${props => props.color};
  transform:  ${props => props.rotate} translateZ(220px);
`
