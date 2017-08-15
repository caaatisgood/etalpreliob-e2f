import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import counter from 'reducers/counter'

export default combineReducers({
  routing,
  counter
})

export const getCounter = state => state.counter
