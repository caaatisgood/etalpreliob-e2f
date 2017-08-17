import React from 'react'
import { Router, Route } from 'react-router'
import { App } from 'components/App'
import Foo from 'components/Foo'
import Bar from 'components/Bar'
import Counter from 'containers/Counter'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='/foo' component={Foo} />
      <Route path='/bar' component={Bar} />
      <Route path='/counter' component={Counter} />
    </Route>
  </Router>
)
