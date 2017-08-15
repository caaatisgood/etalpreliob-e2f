import React from 'react'
import { Link } from 'react-router'

export const App = props => (
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to='/foo'>foo</Link></li>
      <li><Link to='/bar'>bar</Link></li>
    </ul>
  </div>
)
