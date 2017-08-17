import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  counterPlus,
  counterMinus,
  setCounterName,
} from 'actions/counter'
import { getCounter } from 'reducers'
import Counter from 'components/Counter'

export class CounterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showCounter: false,
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

  handleSetCounterName = name => {
    this.props.setCounterName(name)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggleCounterVisibility}>
          {
            this.state.showCounter
            ? 'Hide Counter'
            : 'Show Counter'
          }
        </button>
        <hr />
        {
          this.state.showCounter &&
          (
            <Counter
              inputName={this.state.counterName}
              onNameChange={this.handleCounterNameChange}
              setName={this.handleSetCounterName}
              counter={this.props.counter}
              plus={this.handleCounterPlus}
              minus={this.handleCounterMinus}
            />
          )
        }
      </div>
    )
  }
}

CounterPage.propTypes = {
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
)(CounterPage)
