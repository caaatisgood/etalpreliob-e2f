import { combineReducers } from 'redux'
import * as types from 'constants/actionTypes'

const messageInitState = ''
const errorInitState = ''
const isFetchingInitState = false

const message = (state = messageInitState, action) => {
  switch (action.type) {
    case types.HELLO_REQUEST:
      return messageInitState
    case types.HELLO_REQUEST_DONE:
      return action.message || ''
    default:
      return state
  }
}

const error = (state = errorInitState, action) => {
  switch (action.type) {
    case types.HELLO_REQUEST:
      return errorInitState
    case types.HELLO_REQUEST_FAILED:
      return action.error
    default:
      return state
  }
}

const isFetching = (state = isFetchingInitState, action) => {
  switch (action.type) {
    case types.HELLO_REQUEST:
      return true
    case types.HELLO_REQUEST_DONE:
    case types.HELLO_REQUEST_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  message,
  error,
  isFetching,
})

export const getMessage = state => state.message
export const getError = state => state.error
export const getIsFetching = state => state.isFetching

// or combine them into a object ...

// const initHelloState = {
//   message: null,
//   error: null,
//   isFetching: false,
// }

// const hello = (state = initHelloState, action) => {
//   switch (action.type) {
//     case types.HELLO_REQUEST:
//       return {
//         ...initHelloState,
//         isFetching: true,
//       }
//     case types.HELLO_REQUEST_DONE:
//       return {
//         ...state,
//         isFetching: false,
//         message: action.message,
//       }
//     case types.HELLO_REQUEST_FAILED:
//       return {
//         ...state,
//         isFetching: false,
//         error: action.error,
//       }
//     default:
//       return state
//   }
// }

// export default combineReducers({
//   hello,
// })

// export const getHello = state => state.hello
