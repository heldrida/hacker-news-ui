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
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p, li, div, a {
    font-family: Arial, Helvetica, sans-serif;
  }
  *:focus {
    outline: none;
  }
`

export {
  themeConf,
  DefaultStyles
}