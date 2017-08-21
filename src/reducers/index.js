import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import basic, * as fromBasic from 'reducers/basic'
import counter from 'reducers/counter'

export default combineReducers({
  basic,
  counter,
  routing: routerReducer,
})

export const getCounter = state => state.counter

export const getBasic = state => ({
  message: fromBasic.getMessage(state.basic),
  error: fromBasic.getError(state.basic),
  isFetching: fromBasic.getIsFetching(state.basic),
})
