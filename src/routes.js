import React from 'react'
import { Route } from 'react-router'
import App from 'components/App'
import Base from 'components/Base'
import Foo from 'containers/Foo'
import Bar from 'containers/Bar'

const routes = (
  <Route component={App}>
    <Route path='/' component={Base} />
    <Route path='/foo' component={Foo} />
    <Route path='/bar' component={Bar} />
  </Route>
)

export default routes
