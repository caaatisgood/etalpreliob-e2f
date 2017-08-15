import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import App from 'components/App'
import Foo from 'containers/Foo'
import Bar from 'containers/Bar'
import configure from 'store'

const store = configure()
const history = syncHistoryWithStore(browserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exect path='/' component={App}>
        <Route path='/foo' component={Foo} />
        <Route path='/bar' component={Bar} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
