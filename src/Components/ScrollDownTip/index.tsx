import React from 'react'
import styled, { keyframes } from 'styled-components'

const anime = keyframes`
  from {}
  to {
    transform: translateY(1em);
    opacity: 0;
  }
`

const Scroll = styled.div`
  position: fixed;
  top: 2rem;
  right: 3rem;
  width: 1rem;
  height: 1.9rem;
  bottom: 1rem;
  border: .075em solid black;
  border-radius: 2.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: calc(50% - .1rem);
    top: .2rem;
    width: .2rem;
    height: .2rem;
    background: black;
    border-radius: 50%;
    animation: ${anime} 1.4s ease-in infinite;
  }
`

const ScrollDownTip = () => (
  <Scroll />
)

export default ScrollDownTip