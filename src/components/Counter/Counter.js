import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  setName = () => {
    this.props.setName(this.state.name)
    this.setState({
      name: '',
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='name your counter'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.setName}>set</button>
        <div>name: {this.props.counter.name}</div>
        <div>value: {this.props.counter.value}</div>
        <button onClick={this.props.plus}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  setName: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
}

export default Counter
