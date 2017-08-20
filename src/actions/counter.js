import * as types from 'constants/actionTypes'

export const counterPlus = amount => ({
  type: types.COUNTER_PLUS,
  amount,
})

export const counterMinus = amount => ({
  type: types.COUNTER_MINUS,
  amount,
})

export const setCounterName = name => ({
  type: types.SET_COUNTER_NAME,
  name,
})
