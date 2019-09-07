import React from 'react'
import styled, { keyframes } from 'styled-components'

const Resume = props => {
  return (
    <FlexibleContainer>
      <Header>
        <Name>mreedr</Name>
        <Contact></Contact>
      </Header>
      <Row>
        <Logo>&</Logo>
        <h2>Title</h2>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
      </Row>
      <Row>
        <Logo>&</Logo>
        <h2>Title</h2>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
        <Label>Web Stuff:</Label>
        <Description>Some descirption</Description>
      </Row>
    </FlexibleContainer>
  )
}

export default Resume

const FlexibleContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 980px) minmax(0, 1fr);
  grid-template-areas:
    ". row .";
`
const Row = styled.div`
  grid-area: row;
  grid-row: auto;

  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: repeat(auto-fit, min-content);

  grid-template-areas:
    "logo title ."
    ". label description";
`

const Logo = styled.div`
  grid-area: logo;
  background: lawngreen;
  place-self: center;
`

const Label = styled.p`
  grid-area: label;
  grid-row: auto;
  margin: 0;
  background: darkturquoise;
`

const Description = styled.p`
  grid-area: description;
  grid-row: auto;
  margin: 0;
  background: lightgoldenrodyellow;
`

const Header = styled(Row)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`

const Name = styled.h1`
  grid-area: 1 / 1 / span 1 / span 3;
  background: green;
`

const Contact = styled.div`
  grid-area: 1 / 4;
  background: blanchedalmond;
`
