/* Imports ======================================================================================= */
import React from 'react'
import {connect} from 'react-redux'

import Form from './form'
import {addExpense} from '../actions/expenses'

const AddPage = props => (
  <div>
    <h1>Add Expense</h1>
    <Form
      onSubmit={expense => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddPage)
