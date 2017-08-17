import React from 'react'
import { Router, Route } from 'react-router'
import App from 'components/App'
import Foo from 'components/Foo'
import Bar from 'components/Bar'
import CounterPage from 'containers/CounterPage'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='/foo' component={Foo} />
      <Route path='/bar' component={Bar} />
      <Route path='/counter' component={CounterPage} />
    </Route>
  </Router>
)
