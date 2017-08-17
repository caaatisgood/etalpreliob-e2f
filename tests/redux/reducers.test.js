import counterReducer from 'reducers/counter'
import * as types from 'constants/actionTypes'

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(
      {
        name: 'cool counter',
        value: 0,
      },
    )
  })

  it('should handle COUNTER_PLUS', () => {
    expect(
      counterReducer(undefined, {
        type: types.COUNTER_PLUS,
        amount: 1,
      }),
    ).toEqual(
      {
        name: 'cool counter',
        value: 1,
      },
    )
  })

  it('should handle COUNTER_MINUS', () => {
    expect(
      counterReducer(undefined, {
        type: types.COUNTER_MINUS,
        amount: 1,
      }),
    ).toEqual(
      {
        name: 'cool counter',
        value: -1,
      },
    )
  })

  it('should handle SET_COUNTER_NAME', () => {
    const newCounterName = 'super cool counter'
    expect(
      counterReducer(undefined, {
        type: types.SET_COUNTER_NAME,
        name: newCounterName,
      }),
    ).toEqual(
      {
        name: newCounterName,
        value: 0,
      },
    )
  })
})
