import styled from 'styled-components'
import { IPropsTheme } from '../../Types'

const ErrorContainer = styled.div<IPropsTheme>`
  background: white;
  color: black;
  font-size: 2.6vh;
  line-height: 1.5;
  width: auto;
  height: 100vh;
  padding: 5vh;

  & h1 {
    font-size: 5.2vh;
    padding-bottom: 3vh;
  }

  & a {
    color: black;
    text-decoration: underline;
  }
  & p {
    margin: 0;
    padding: 0;
  }
`

const ErrorContent = styled.div`
  margin-top: 1rem;

  & p {
    font-family: 'Nanum Gothic', sans-serif;
  }
`

export {
  ErrorContainer,
  ErrorContent
}