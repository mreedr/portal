import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

// seeded random number
function random(seed) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}
// 17, 18
const randColor = (seed) => Math.floor(random(seed + 19) * 16777215).toString(16)

const CardCarousel = props => {
  const head = [
    {
      id: 0,
      backgroundColor: 'rgba(177,193,210, 0.3)',
      el: (
        <Number>
          {/* {0} */}
        </Number>
      )
    }
  ]

  const blink = transform => {
    const x = keyframes`
      0%, 10% {
        height: 100%;
      }

      15% {
        height: 0%;
      }

      20%, 100% {
        height: 100%
      }
    `
    return css`${x} 3s ease-in-out 2s infinite`
  }

  const bounce = transform => {
    const x = keyframes`
        0%, ${'100%'} {
          transform: ${transform};
        }
        25% {
          transform: ${transform} translateZ(20px);
        }
        75% {
          transform: ${transform} translateZ(-20px);
        }
      `
    return css`${x} ${'0.5s'} infinite alternate`
  }

  const glasses = [
    {
      id: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      fontSize: '2.5rem',
      animation: blink,
      el: (
        <Number>
          {/* 4
          . */}
        </Number>
      )
    }, {
      id: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      fontSize: '2.5rem',
      animation: blink,
      el: (
        <Number>
          {/* 5
          . */}
        </Number>
      )
    }
  ]

  const rightHeadPhone = [
    {
      id: 1,
      backgroundColor: 'rgba(0,255,0, 0.4)',
      el: (
        <Number>
          {/* {1} */}
        </Number>
      )
    }, {
      id: 2,
      // backgroundColor: 'rgba(0,0,0, 0.3)',
      backgroundColor: 'rgba(0,255,0, 0.7)',
      color: 'white',
      animation: bounce,
      el: (
        <Number>
          {/* {2} */}
        </Number>
      )
    }, {
      id: 3,
      backgroundColor: 'rgba(0,255,0, 0.3)',
      el: (
        <Number>
          {/* {3} */}
        </Number>
      )
    }
  ]

  const leftHeadPhone = [
    {
      id: 6,
      backgroundColor: 'rgba(0,0,255, 0.3)',
      el: (
        <Number>
          {/* 6 */}
        </Number>
      )
    }, {
      id: 7,
      // backgroundColor: 'rgba(0,0,0, 0.3)',
      backgroundColor: 'rgba(0,0,255, 0.7)',
      color: 'white',
      animation: bounce,
      el: (
        <Number>
          {/* {7} */}
        </Number>
      )
    }, {
      id: 8,
      backgroundColor: 'rgba(0,0,255, 0.4)',
      el: (
        <Number>
          {/* {8} */}
        </Number>
      )
    }
  ]

  const [data, setData] = useState([
    ...head,
    ...rightHeadPhone,
    ...glasses,
    ...leftHeadPhone
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
              <Cell key={el.id} {...el}
                rotate={interval * i}
                onClick={e => setOrientation(-(interval * i))}>
                {el.el}
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
  /* border: 1px solid gray; */
  height: 200px;
  width: 200px;
`

const size = 400 // how far apart the elements are from the origin

const Carousel = styled.div`
  display: grid;
  transform-style: preserve-3d;
  height: 100%;
  transform: translateZ(-${size}px) rotateY(${props => props.orientation}deg);
  transition: all 2s;
`

const renderTransform = props => {
  return `rotateY(${props.rotate}deg) translateZ(${size}px)`
}

const Cell = styled.div`
  display: grid;
  align-self: center;
  opacity: 0.7;
  grid-area: 1 / 1 / span 1 / span 1;
  background: ${props => props.backgroundColor};  
  transform: ${props => renderTransform(props)};
  /* transform: rotateY(${props => props.rotate}deg) translateZ(${size}px); */
  color: ${props => props.color || 'black'};
  height: 100%;
  font-size: 2.5rem;
  border-radius: 50px;
  animation: ${(props) => (props.animation && props.animation(renderTransform(props))) || 'none'};
  /* rotateY(${props => props.rotate * -1}deg) */
`

const Number = styled.div`
  width: 100%;
`
