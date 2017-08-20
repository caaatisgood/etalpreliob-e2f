import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hello } from 'actions/basic'
import { getBasic } from 'reducers'

const HelloPage = props => (
  <div>
    <button onClick={props.hello}>say hello</button>
    <p>isFetching: { `${props.basic.isFetching}` }</p>
    <p>message: { props.basic.message }</p>
    <p>error: { `${props.basic.error}` }</p>
  </div>
)

HelloPage.propTypes = {
  basic: PropTypes.shape({
    isFetching: PropTypes.bool,
    message: PropTypes.string,
    error: PropTypes.string,
  }),
  hello: PropTypes.func,
}

const mapStateToProps = state => ({
  basic: getBasic(state),
})

export default connect(
  mapStateToProps,
  {
    hello,
  },
)(HelloPage)
