import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themeConf, DefaultStyles } from './styled'
import Home from './Container/Home'

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <DefaultStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App