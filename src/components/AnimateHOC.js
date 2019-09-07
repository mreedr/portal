/*
  secret sauce is remembering animation history. this allows
  us to perform long chains of animations and transforms that
  preserve themselves across time. It also localizes any transformations
  to the given element no matter how many previous animations
  have happened
*/

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useTransforms from '../hooks/useAnimate'

const AnimateScene = props => {
  // const [transforms, setTransforms] = useTransforms()
  const [initialTransforms, setInitialTransforms] = useState([])

  useEffect(() => {
    const transforms = []
    React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return
      const { initialTransform } = child.props

      // child.props.style = { transform: initialTransform }

      transforms.push(initialTransform)
      return React.cloneElement(child, { doSomething: '' })
    })
    setInitialTransforms(transforms)
  }, [])
  console.log('initialTransforms', initialTransforms)

  return (
    <div>
      {props.children}
    </div>
  )
}

export default AnimateScene

// const Scene = styled.div`

// `
