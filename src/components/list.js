import React from 'react'
import { connect } from 'react-redux'

import ListItem from './list-item'
import selectExpenses from '../selectors/expenses'

export const List = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ListItem key={expense.id} {...expense} />
      })
    )}
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(List)
