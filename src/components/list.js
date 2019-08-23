import React from 'react'
import {connect} from 'react-redux'

import ListItem from './list-item'
import selectExpenses from '../selectors/expenses'

const List = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ListItem key={expense.id} {...expense} />
    })}
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(List)
