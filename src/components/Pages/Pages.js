import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Foo from 'components/Foo'
import Bar from 'components/Bar'

const Pages = ({ match, ...props }) => (
  <div>
    <h2>Pages</h2>
    <ul>
      <li><Link to={`${match.url}/foo`} replace>foo</Link></li>
      <li><Link to={`${match.url}/bar`} replace>bar</Link></li>
    </ul>

    <Route path={`${match.url}/foo`} component={Foo} />
    <Route path={`${match.url}/bar`} component={Bar} />
  </div>
)

Pages.propTypes = {
  match: PropTypes.object.isRequired,  // eslint-disable-line
}

export default Pages
