/* Imports ======================================================================================= */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
/* Styles ======================================================================================== */
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/app-router'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
