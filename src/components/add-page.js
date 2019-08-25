/* Imports ======================================================================================= */
import React from 'react'
import { connect } from 'react-redux'

import Form from './form'
import { startAddExpense } from '../actions/expenses'

export class AddPage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(
  undefined,
  mapDispatchToProps
)(AddPage)
