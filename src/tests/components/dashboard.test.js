import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from '../../components/dashboard'

test('should render Dashboard correctly', () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper).toMatchSnapshot()
})
