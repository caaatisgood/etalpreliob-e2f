import React from 'react'

export const Counter = props => (
  <div>
    <input type='text' onChange={props.setCounterName} />
    <div>{props.name}</div>
    <div>{props.value}</div>
    <button onClick={props.counterPlus}>+</button>
    <button onClick={props.counterMinus}>-</button>
  </div>
)

Counter.propTypes = {

}
