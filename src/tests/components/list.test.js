import React from 'react'
import { shallow } from 'enzyme'

import { List } from '../../components/list'
import expenses from '../fixtures/expenses'

test('should render List with expenses', () => {
  const wrapper = shallow(<List expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render List with empty message', () => {
  const wrapper = shallow(<List expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})
