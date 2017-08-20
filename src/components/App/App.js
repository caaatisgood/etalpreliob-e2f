import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from 'components/Home'
import Pages from 'components/Pages'
import CounterPage from 'containers/CounterPage'
import HelloPage from 'containers/HelloPage'
import './app.scss'

const App = props => (
  <div styleName='appWrap'>
    <h1 id='title'>App Title</h1>
    <ul>
      <li><Link to='' replace>Home</Link></li>
      <li><Link to='/pages' replace>Pages</Link></li>
      <li><Link to='/counter' replace>Counter</Link></li>
      <li><Link to='/hello' replace>Hello</Link></li>
    </ul>

    <Route exact path='/' component={Home} />
    <Route path='/pages' component={Pages} />
    <Route path='/counter' component={CounterPage} />
    <Route path='/hello' component={HelloPage} />
  </div>
)

export default App
