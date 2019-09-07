import React from 'react'
import styled, { keyframes } from 'styled-components'

const Resume = props => {
  const columns = 4
  return (
    <FlexibleContainer>
      <Layout span={columns}>
        <Cell span={3}>
          <h1>Michael Reeder</h1>
        </Cell>
        <Cell span={1}>
          <Contact></Contact>
        </Cell>

        <Cell span={4}>
          <Logo>&</Logo>
          <h2>Experience</h2>
        </Cell>
        <Cell span={1}>
          <Label>Web Stuff:</Label>
        </Cell>
        <Cell span={3}>
          <Description>Some descirption</Description>
        </Cell>

        <Cell span={1}>
          <Label>Web Stuff:</Label>
        </Cell>
        <Cell span={3}>
          <Description>Some descirption</Description>
        </Cell>

        <Cell span={4}>
          <Logo>&</Logo>
          <h2>Experience</h2>
        </Cell>
        <Cell span={1}>
          <Label>Web Stuff:</Label>
        </Cell>
        <Cell span={3}>
          <Description>Some descirption</Description>
        </Cell>

      </Layout>
    </FlexibleContainer>
  )
}

export default Resume

// this is what I could do my medium article on
const FlexibleContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 980px) minmax(0, 1fr);
  grid-template-areas:
    ". row .";
`

const Layout = styled.div`
  grid-area: row;
  grid-row: auto;

  display: grid;
  grid-template-columns: repeat(${props => props.span}, 1fr);
`

const Contact = styled.div`height: 100%; width: 100%; background: chocolate;`

const Cell = styled.div`
  grid-column: auto / span ${props => props.span};
  display: flex;
`
// also could post about that grid-row has to go below grid-area
const Label = styled.p`
  align-self: end;
  text-align: right;
  width: 100%;
  margin: 0;
`

const Description = styled.p`
  margin: 0;
  width: 100%;
`

const Logo = styled.div`
  align-self: center;
`
