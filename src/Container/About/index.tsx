import React, { useEffect } from 'react'
import { AboutContainer, AboutContent } from './styled'
import Cross from '../../Icons/Cross'
import { Link } from 'react-router-dom'

const About = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AboutContainer>
      <Link to="/">
        <Cross />
      </Link>
      <AboutContent>
        <h1>Welcome</h1>
        <p>The project was developed and is maintained by <a href="https://www.punkbit.com" target="_blank">Punkbit!</a></p>
        <p>Developed as an experimental concept for a Hacker News reader application that consumes data from
        a GraphQl API Wrapper "for the not so great" HN Rest API - the GraphQl endpoint is not 100% production ready, so occasional issues may
        occur, that relate to the base Rest endpoints. If down, please try again after a few minutes!</p>
        <p>I wrote the project after a company's request but decided to use the opportunity to be a bit more creative to
          avoid boredom that is caused by the nature of this sort of challenges. I'll updated it when possible, providing any fixes, 
          amends or improvements based in any library updates in the app stack. So, check my <a href="https://github.com/heldrida" target="_target">Github</a> where you'll find
          other open-source projects that may be useful for any of your "fork" interests.</p>
        <p>Any questions please find the contacts provided in either the Punkbit site or Github account. Enjoy!</p>
      </AboutContent>
    </AboutContainer>
  )
}

export default About