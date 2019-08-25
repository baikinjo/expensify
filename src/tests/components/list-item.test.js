import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import ListItem from '../../components/list-item'

test('should render list item correctly', () => {
  const wrapper = shallow(<ListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
