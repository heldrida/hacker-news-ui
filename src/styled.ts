import { createGlobalStyle } from 'styled-components'
import appConfig from './config'
import { TThemeConf } from './Types'

const themeConf: TThemeConf = {
  ...appConfig.themeColors.default
}

const DefaultStyles = createGlobalStyle`
  * {
    text-decoration: none;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: white;
    font-family: 'Bitter', serif;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
  }
  p, li, div, a {
    font-family: 'Bitter', serif;
  }
  *:focus {
    outline: none;
  }
`

export {
  themeConf,
  DefaultStyles
}