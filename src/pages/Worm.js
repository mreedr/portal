import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import AnimateScene from '../components/AnimateHOC'
import useAnimate from '../hooks/useAnimate'

const Worm = props => {
  // const [elRef] = useAnimate(El)
  const [elRef] = useAnimate()

  /*
    useEffect(() => {
      startAnimationChain()
    }, [])
  */

  return (
    <Container>
      {/*
        problem: I need to use keyframes`` which is in styled components

        i could save the animations as keyframe objects
      */}
      <El
        ref={elRef}
        // initialTransform={`rotateX(${360}deg)`}
        // initialAnimationChain={[keyframs``, 2, 3]}
        initialAnimationChain={[1, 2, 3]}
        onClick={(animate, e) => {
          // animate.push('rotateX(360deg)')
          // animate.pop(<reverse-animation>)
          // animate.animateOnce('')
          // animate.animateSave('rotateY(90deg)')
          // animate.recover(<previous-transform-state> | pop)
          //  // reverts last change
          // animate.push() // create a new animation
        }}
      >
        i want to be animated in an animation chain
      </El>
      {/* <AnimateScene>

        {elements.map((el, i) => {
          const interval = 360 / elements.length
          // setTransform({...transform, el: {} })
          return (
            <El key={el}
              initialTransform={`rotateX(${i * interval}deg)`}
              initialAnimation={1}
              onClick={(animate, e) => {
                // animate.push('rotateX(360deg)')
                // animate.pop(<reverse-animation>)
                // animate.animateOnce('')
                // animate.animateSave('rotateY(90deg)')
                // animate.recover(<previous-transform-state> | pop)
                //  // reverts last change
                // animate.push() // create a new animation
              }}
            >
              {el}
            </El>
          )
        })}
      </AnimateScene> */}
    </Container>
  )
}

export default Worm

const Container = styled.div`
  background: red;
  height: 100%;
`

const El = styled.div`
  background: blue;
  color: white;
  :before {
    content: "sometihng";
    color: green;
  }

  transition: all 2s;
`
