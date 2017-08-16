import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import { routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

export default function configure (...middlewares) {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      combineReducers({
        ...rootReducer,
        routing: routerReducer
      }),
      applyMiddleware(...middlewares, thunk)
    )
  } else {
    return createStore(
      combineReducers({
        ...rootReducer,
        routing: routerReducer
      }),
      undefined,
      compose(
        applyMiddleware(...middlewares, thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  }
}
