import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

export default function configure (...middlewares) {
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      applyMiddleware(...middlewares, thunk),
    )
  }
  return createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(...middlewares, thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  )
}
