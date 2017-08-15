import React from 'react'

const Counter = props => (
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

export default Counter
