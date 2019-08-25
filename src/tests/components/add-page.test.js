import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import { AddPage } from '../../components/add-page'

let addExpense, history, wrapper

beforeEach(() => {
  addExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddPage addExpense={addExpense} history={history} />)
})

test('should render add page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('Form').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})
