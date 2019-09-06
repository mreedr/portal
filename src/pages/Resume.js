import React from 'react'
import styled, { keyframes } from 'styled-components'

const Resume = props => {
  return (
    <Container>
      <El>
        Resume and other words jskdfkjdsskdjfksjfiwoiej wjw kjalksj lkjsd
      </El>
      <El>Resume and other words</El>
      {/* <El2>red</El2> */}
    </Container>
  )
}

export default Resume

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  height: 100%;
  display: grid;
  /* animation: ${rotate} 3s linear infinite; */
  /* auto-fill can be achieved without an overflow*/
  /* grid-template-columns: 50px 50px [content] auto 50px 50px; */
  /* grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr)); */
  /* grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr)); */
  /* grid-template-columns: min-content 1fr 1fr; */
  /* grid-template-columns: repeat(2, min-content) 1fr; */
  /* grid-template-columns: minmax(min-content, max-content) minmax(min-content, max-content); */
  /* grid-template-columns: repeat(auto-fit, minmax(min-content, max-content)); */
  grid-template-columns: 300px 300px;
  /* minmax(min-content, max-content) minmax(min-content, max-content); */
  /* justify-content: space-around; */
  place-items: center;
  /* justify-items: center;
  align-items: end; */
  /* grid-template-rows: 1fr; */
  /* grid-template-areas:
    "header header header header header"
    "main main . . sidebar"
    "footer footer footer footer footer"; */
    /* transition: grid-template-columns 2s ease-in; */

    &:hover {
      grid-template-columns: 500px 500px;
      /* background: red; */
    }
`

const El = styled.p`
  /* width: max-content; */
  /* grid-area: header; */
  /* grid-column: 1 / span 3; */
  /* grid-row: 1 / span 2; */
  /* place-self: center; */
  /* height: 50px;
  width: 50px; */
  /* width: fit-content; */

  transition:
    transform 2s steps(10, end),
    background 2s steps(10, end);
  background: green;

  &:hover {
    /* height: 100%; */
    background: skyblue;
    /* transform: scale(2, 2); */
  }
`

const El2 = styled(El)`
  background: red;
  /* margin-right: 500px; */
  transition: margin-right 0.2s;

  &:hover {
    margin-right: 0px;
  }
`
