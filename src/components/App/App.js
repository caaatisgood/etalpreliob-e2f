import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './app.scss'

const App = props => (
  <div>
    <h1 id='title'>App Title</h1>
    <ul>
      <li><Link to='/foo'>foo</Link></li>
      <li><Link to='/bar'>bar</Link></li>
      <li><Link to='/counter'>counter</Link></li>
    </ul>
    { props.children }
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
