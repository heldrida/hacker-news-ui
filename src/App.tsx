import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>{'<Home /> placeholder!'}</p>
          </Route>
        </Switch>
      </Router>
  )
}

export default App