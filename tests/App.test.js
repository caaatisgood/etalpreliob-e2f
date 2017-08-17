import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'

describe('App Component', () => {
  const app = shallow(<App />)

  it('should have one title', () => {
    expect(app.find('h1').text()).toEqual('App Title')
  })
})
