import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const randColor = () => Math.floor(Math.random() * 16777215).toString(16)
const b = size => Math.sqrt(Math.pow(size, 2) - Math.pow(size / 2, 2))

const Shutter = props => {
  const size = '200'
  const [isAnimate, setAnimate] = useState(false)
  useEffect(() => {
    if (isAnimate) {
      setTimeout(() => setAnimate(false), 600)
    }
  }, [isAnimate])
  return (
    <Circle size={size}>
      <Lense size={size} onClick={() => setAnimate(true)}>
        <Container>
          {[0, 60, 120, 180, 240, 300, 360].map((deg, i) => {
            return (
              <OuterTriangle
                key={i}
                rotate={deg}
                size={size}
                animate={isAnimate}
              >
                <InnerTriangle size={size} />
              </OuterTriangle>
            )
          })}
        </Container>
      </Lense>
    </Circle>
  )
}

export default Shutter

const Circle = styled.div`
  width: min-content;
  border-radius: 50%;
  border: 1px solid black;
  /* border: ${({ size }) => size / 40}px solid black; */
  /* margin: auto; */
`

const Lense = styled.div`
  height: ${({ size }) => size * 1.5}px;
  width: ${({ size }) => size * 1.5}px;
  overflow: hidden;
  border-radius: 50%;
  transform: scale(0.975);
`

const Container = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: start;
  grid-template-rows: 1fr 1fr;
`

const OriginTransition = ({ size }) => {
  const distance = (size / 2) - 10
  const margin = size - distance * 2

  return keyframes`
    from {
      transform-origin: ${distance}px 0 0;
      margin-left: ${margin}px;
    }

    to {
      transform-origin: 0 0 0;
      margin-left: ${size}px;
    }
  `
}

const OuterTriangle = styled.div`
  position: absolute;
  place-items: center;
  grid-area: 2 / 1;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ size }) => `0 ${size / 2}px ${b(size)}px ${size / 2}px`};
  border-color: transparent transparent transparent transparent;

  transform: rotate(${props => props.rotate}deg);

  transform-origin: 0 0 0;
  margin-left: ${({ size }) => size}px;
  animation: ${props => OriginTransition(props)} 0.3s linear forwards alternate-reverse 2;
  ${({ animate }) => animate || 'animation: none;'}
`

const InnerTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ size }) => `0 ${size / 2}px ${b(size)}px ${size / 2}px`};
  border-color: transparent transparent black transparent;
  margin-left: -${({ size }) => size / 2}px;
  transform: scale(0.95);
`
