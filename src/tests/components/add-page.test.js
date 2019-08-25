import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import { AddPage } from '../../components/add-page'

let startAddExpense, history, wrapper

beforeEach(() => {
  startAddExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <AddPage startAddExpense={startAddExpense} history={history} />
  )
})

test('should render add page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('Form').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
