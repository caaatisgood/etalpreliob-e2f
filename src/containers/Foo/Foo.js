import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  counterPlus,
  counterMinus,
  setCounterName
} from 'actions/counter'
import { getCounter } from 'reducers'
import Counter from 'components/counter'

class Foo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showCounter: false
    }
  }

  handleToggleCounterVisibility = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }

  handleCounterPlus = e => {
    this.props.counterPlus(1)
  }

  handleCounterMinus = e => {
    this.props.counterMinus(-1)
  }

  handleSetCounterName = e => {
    this.props.setCounterName(e.target.value)
  }

  render () {
    return (
      <div>
        <button onClick={() => this.test()}>
          { this.state.showCounter ? 'Hide Counter' : 'Show Counter' }
        </button>
        {
          this.state.showCounter &&
          (
            <Counter
              name={this.props.counter.name}
              value={this.props.counter.value}
              counterPlus={this.handleCounterPlus}
              counterMinus={this.handleCounterMinus}
              setCounterName={this.handleSetCounterName}
            />
          )
        }
      </div>
    )
  }
}

Foo.propTypes = {
  counter: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number
  }),
  counterPlus: PropTypes.func,
  counterMinus: PropTypes.func,
  setCounterName: PropTypes.func
}

Foo.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  counter: getCounter(state)
})

export default connect(
  mapStateToProps,
  {
    counterPlus,
    counterMinus,
    setCounterName
  }
)(Foo)
