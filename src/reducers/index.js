import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from 'reducers/counter'

export default combineReducers({
  counter,
  routing: routerReducer,
})

export const getCounter = state => state.counter
