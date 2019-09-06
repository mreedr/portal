import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Layout = ({ component: Component, history, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => {
      return (
        <Container>
          <Component {...matchProps}/>
        </Container>
      )
    }}>
    </Route>
  )
}

export default Layout

const Container = styled.div`
  height: 100%;
`
