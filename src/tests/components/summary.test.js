import React from 'react'
import { shallow } from 'enzyme'

import { Summary } from '../../components/summary'

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<Summary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<Summary expenseCount={20} expensesTotal={65421} />)
  expect(wrapper).toMatchSnapshot()
})
