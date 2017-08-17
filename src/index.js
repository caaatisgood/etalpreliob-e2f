import ReactDOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import {
  Router,
  browserHistory
} from 'react-router'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configure from 'store/configure'
import Root from './routes'

// const history = createBrowserHistory()
const store = configure(routerMiddleware(browserHistory))
syncHistoryWithStore(browserHistory, store)

const render = (routes) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory}>
          { routes }
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newApp = require('./routes').default
    render(newApp)
  })
}
