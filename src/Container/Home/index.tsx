import React, { useEffect, useCallback, useState } from 'react'
import ScrollDownTip from '../../Components/ScrollDownTip'
import ScrollableList from '../../Components/ScrollableList'
import Logo from '../../Icons/Logo'
import { BlackLogoContainer } from './styled'
import { Link } from 'react-router-dom'

const Home = () => { 
  const [hideScrollTip, setHideScrollTip] = useState<boolean>(false)
  const scrollToHandler = useCallback(() => {
    const hide = window.scrollY > (window.screen.availHeight * 1.1)
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
      <Link to={'/about'}>
        <BlackLogoContainer hide={!hideScrollTip}>
          <Logo black={true} />
        </BlackLogoContainer>
      </Link>
    </>
  )
}

export default Home