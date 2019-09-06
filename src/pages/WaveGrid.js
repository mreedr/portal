/*
picture change on flip ->

 \   \
---------
   \   \               -> [ ]
  ----------
     \   \
*/
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const randColor = () => Math.floor(Math.random() * 16777215).toString(16)

const WaveGrid = props => {
  const columns = 3
  const rows = 5
  const array = new Array(columns * rows).fill().map((val, idx) => idx)
  return (
    <Scene>
      <Container columns={columns} rows={rows}>
        {array.map((e, i) => (
          <Card i={i} key={i} animate={true} />
        ))}
      </Container>
    </Scene>
  )
}

export default WaveGrid

const Scene = styled.div`
  height: 100%;
  background: black;
  perspective: 600px;
`

const Container = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(${({ columns }) => columns}, 80px) 1fr;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-gap: 10px;

  transform: rotateX(40deg) translateY(-100px);
  transform-style: preserve-3d;
`

const scale = keyframes`
  0%, 100% {
    transform: scale(1,1);
    transform: translateZ(1px);
    background: red;
  }

  50% {
    transform: scale(1.5,1.5);
    transform: translateZ(200px);
    background: blue;
  }
`

const Card = styled.div`
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform-origin: center right;

  &:active {
    transform: translateX(-100%) rotateY(-180deg);
  }
  
  /* ${({ animate, i }) => animate && css`animation: ${scale} ${1}s ${i}s`}; */

  :after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    content: "back";
    background: gray;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }

  :before {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    content: "front";
    background: white;
    backface-visibility: hidden;
    /* animation: ${scale} 10s ease-in-out 1s; */
    /* z-index: 1; */
    /* ${({ animate, i }) => animate && css`animation: ${scale} ${15}s ease-in-out ${i}s`}; */
  }
`
