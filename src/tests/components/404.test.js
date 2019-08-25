import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '../../components/404'

test('should render not found correctly', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot()
})
