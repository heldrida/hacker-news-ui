import styled from 'styled-components'
import { IPropsTheme } from '../../Types'

const AboutContainer = styled.div<IPropsTheme>`
  background: black;
  color: white;
  font-size: 2.6vh;
  line-height: 1.5;
  width: auto;
  height: 100vh;
  padding: 5vh;

  & a {
    color: white;
    text-decoration: underline;
  }
  & p {
    margin: 0;
    padding: 0 0 1rem;
  }
  & svg {
    width: 4rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`

const AboutContent = styled.div`
  margin-top: 4rem;
  padding-right: 4rem;

  & p {
    font-family: 'Nanum Gothic', sans-serif;
  }
`

export {
  AboutContainer,
  AboutContent
}