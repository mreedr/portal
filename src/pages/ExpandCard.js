import React, { useState } from 'react'
import styled from 'styled-components'

const ExpandCard = () => {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <Wrapper>
      <Inner>
        <span>i</span>
        <h1>Hey</h1>
        <p>This is an informative card that will tell you something that's... well, important!</p>
        {/* <Left isExpanded={isExpanded} />
        <Circle
          isExpanded={isExpanded}
          onClick={e => setExpanded(!isExpanded)}/> */}
      </Inner>
    </Wrapper>
  )
}

export default ExpandCard

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`

const Inner = styled.div`
  background: rgb(9, 201, 153);
  padding: 1em;
  border-radius: 10px;
  width: 250px;
  clip-path: circle(10% at 90% 20%);
  transition: all .5s ease-in-out;
  cursor: pointer;

  &:hover {
    clip-path: circle(75%);
    background: #00B6FF;
  }

  h1 {
    color: white;
    margin: 0;
  }

  p {
    color: white;
    font-size: .8rem;
  }
  span {
    float: right;
    color: white;
    font-weight: bold;
    transition: color .5s;
    position: relative;
    margin-right: 5%;
  }
  &:hover span {
    color: rgba(255, 255, 255, 0)
  }
`
