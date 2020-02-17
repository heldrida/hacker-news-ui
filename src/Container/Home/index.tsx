import React, { useEffect, useCallback, useState } from 'react'
import ScrollDownTip from '../../Components/ScrollDownTip'
import ScrollableList from '../../Components/ScrollableList'
import Logo from '../../Icons/Logo'
import styled from 'styled-components'
import { BlackLogoContainer } from './styled'

const Home = () => { 
  const [hideScrollTip, setHideScrollTip] = useState<boolean>(false)
  const scrollToHandler = useCallback(() => {
    const hide = window.scrollY > 600
    setHideScrollTip(hide)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollToHandler)
    return () => {
      window.removeEventListener('scroll', scrollToHandler)
    }
  }, [scrollToHandler])

  return (
    <>
      <ScrollDownTip hide={hideScrollTip} />
      <ScrollableList />
      <BlackLogoContainer hide={!hideScrollTip}>
        <Logo black={true} />
      </BlackLogoContainer>
    </>
  )
}

export default Home