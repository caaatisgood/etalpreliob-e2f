import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Router, Route } from 'react-router'
import { App } from 'components/App'
import Foo from 'containers/Foo'
import Bar from 'containers/Bar'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='/foo' component={Foo} />
      <Route path='/bar' component={Bar} />
    </Route>
  </Router>
)
