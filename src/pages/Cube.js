import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const randColor = () => Math.floor(Math.random() * 16777215).toString(16)

const Cube = props => {
  const [orientation, setOrientation] = useState('translateZ(-100px) rotateY(0deg)')
  const [collapse, setCollapse] = useState(false)
  return (
    <Wrapper>
      <button onClick={e => setOrientation('translateZ(-100px) rotateY(0deg)')}>0</button>
      <button onClick={e => setOrientation('translateZ(-100px) rotateY( -90deg)')}>1</button>
      <button onClick={e => setOrientation('translateZ(-100px) rotateY(-180deg)')}>2</button>
      <button onClick={e => setOrientation('translateZ(-100px) rotateY(90deg)')}>3</button>
      <button onClick={e => setOrientation('translateZ(-100px) rotateX(-90deg)')}>4</button>
      <button onClick={e => setOrientation('translateZ(-100px) rotateX(90deg)')}>5</button>
      <Scene>
        <CubeContainer orientation={orientation}>
          {['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'].map((el, i) => (
            <Face rotate={`${el}`} color={randColor()} index={i}
              key={i}
              onClick={e => setCollapse(!collapse && el)}
              collapse={collapse}
            >
              {i}
            </Face>
          ))}
        </CubeContainer>
      </Scene>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 4fr;
`

const Scene = styled.div`
  grid-area: 2 / span 6;
  border: 1px solid gray;

  height: 20rem;
  width: 20rem;
  padding: 1rem;

  perspective: 600px;
  perspective-origin: 50%;
`

const CubeContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transform-style: preserve-3d;
  transition: all 2s;
  transform: translateZ(-10rem) ${props => props.orientation};
`

const Face = styled.div`
  display: grid;
  place-items: center;
  grid-area: 1 /  1 / span 1 / span 1;
  font-size: 4rem;
  color: white;
  background-color: #${props => props.color};
  /* background: rgba(0, 151, 19, 1);  */

  transform: ${({ collapse, rotate }) => collapse || rotate} translateZ(10rem);
  opacity: ${({ collapse, rotate }) => collapse ? (collapse === rotate ? '1' : '0.0') : '0.8'};
  border: 2px solid black;
  transition: all 2s;

  /* ${({ collapse, rotate }) => collapse === rotate && 'z-index: 1'}; */
  /* height: 100%;
  width: 100%; */
`

export default Cube
