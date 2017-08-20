import ReactDOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import configure from 'store/configure'
import Root from './routes'

const history = createHistory()
const store = configure(routerMiddleware(history))

const render = (routes) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedRouter history={history}>
            { routes }
          </ConnectedRouter>
        </BrowserRouter>
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
