/* Imports ======================================================================================= */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
/* Styles ======================================================================================== */
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/app-router'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()
store.dispatch(
  addExpense({description: 'Water Bill', amount: 4500, createdAt: 200})
)
store.dispatch(
  addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1000})
)
store.dispatch(addExpense({description: 'Rent', amount: 100000}))

const state = store.getState()
const visible = getVisibleExpenses(state.expenses, state.filters)

console.log(visible)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
