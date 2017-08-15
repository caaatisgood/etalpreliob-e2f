import * as t from 'constants/actionTypes'

export const counterPlus = amount => ({
  type: t.COUNTER_PLUS,
  amount
})

export const counterMinus = amount => ({
  type: t.COUNTER_MINUS,
  amount
})

export const setCounterName = name => ({
  type: t.SET_COUNTER_NAME,
  name
})
