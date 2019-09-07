import { useState, useEffect, useRef } from 'react'

const useAnimate = () => {
  const [transform, setTransform] = useState()

  const elRef = useRef(null)

  useEffect(() => {
    const initialTransform = window.getComputedStyle(elRef.current)['transition']
    console.log(initialTransform)
    elRef.current.style = 'background: green;'
  }, [elRef])

  return [elRef]
}

export default useAnimate
