import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  counterPlus,
  counterMinus,
  setCounterName,
} from 'actions/counter'
import { getCounter } from 'reducers'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showCounter: false,
      counterName: ''
    }
  }

  handleToggleCounterVisibility = () => {
    this.setState({
      showCounter: !this.state.showCounter,
    })
  }

  handleCounterPlus = () => {
    this.props.counterPlus(1)
  }

  handleCounterMinus = () => {
    this.props.counterMinus(1)
  }

  handleCounterNameChange = e => {
    this.setState({
      counterName: e.target.value
    })
  }

  handleSetCounterName = () => {
    this.props.setCounterName(this.state.counterName)
    this.setState({
      counterName: ''
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='name your counter'
          value={this.state.counterName}
          onChange={this.handleCounterNameChange}
        />
        <button onClick={this.handleSetCounterName}>set</button>
        <div>name: {this.props.counter.name}</div>
        <div>value: {this.props.counter.value}</div>
        <button onClick={this.handleCounterPlus}>+</button>
        <button onClick={this.handleCounterMinus}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
  counterPlus: PropTypes.func,
  counterMinus: PropTypes.func,
  setCounterName: PropTypes.func,
}

const mapStateToProps = state => ({
  counter: getCounter(state),
})

export default connect(
  mapStateToProps,
  {
    counterPlus,
    counterMinus,
    setCounterName,
  },
)(Counter)
