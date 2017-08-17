import React from 'react'
import { shallow } from 'enzyme'
import { CounterPage } from 'containers/CounterPage'
import Counter from 'components/Counter'

describe('CounterPage counter visibility toggle', () => {
  const page = shallow(<CounterPage />)

  it('should show counter component', () => {
    page.setState({ showCounter: true })
    expect(page.find(Counter).length).toBe(1)
  })

  it('should hide counter component', () => {
    page.setState({ showCounter: false })
    expect(page.find(Counter).length).toBe(0)
  })
})
