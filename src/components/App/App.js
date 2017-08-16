import React from 'react'
import { Route, Link } from 'react-router-dom'
import Foo from 'containers/Foo'
import Bar from 'containers/Bar'

export const App = ({ match }) => (
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to={`${match.url}/foo`}>foo</Link></li>
      <li><Link to={`${match.url}/bar`}>bar</Link></li>
    </ul>
    <Route path={`${match.url}/foo`} component={Foo} />
    <Route path={`${match.url}/bar`} component={Bar} />
  </div>
)
