import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollableList from './Components/ScrollableList'
import { ThemeProvider } from 'styled-components'
import { themeConf, DefaultStyles } from './styled'
import ScrollDownTip from './Components/ScrollDownTip'

const App = () => {
  return (
    <ThemeProvider theme={themeConf}>
      <DefaultStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <ScrollDownTip />
            <ScrollableList />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App