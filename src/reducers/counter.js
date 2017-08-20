import { combineReducers } from 'redux'
import * as types from 'constants/actionTypes'

const value = (state = 0, action) => {
  switch (action.type) {
    case types.COUNTER_PLUS:
      return state + action.amount
    case types.COUNTER_MINUS:
      return state - action.amount
    default:
      return state
  }
}

const name = (state = 'cool counter', action) => {
  switch (action.type) {
    case types.SET_COUNTER_NAME:
      return action.name
    default:
      return state
  }
}

export default combineReducers({
  value,
  name,
})
