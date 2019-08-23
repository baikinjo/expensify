import uuid from 'uuid'

const addExpense = ({
  description = '',
  note = 'note',
  amount = 0,
  createdAt = 0
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

// const one = store.dispatch(addExpense({description: 'rent', amount: 150000}))
// const two = store.dispatch(addExpense({description: 'car', amount: 330}))
store.dispatch(
  addExpense({description: 'mouse', amount: 550, createdAt: -3000})
)
store.dispatch(
  addExpense({description: 'keyboard', amount: 3000, createdAt: -1000})
)
// store.dispatch(removeExpense({id: one.expense.id}))
// store.dispatch(editExpense(two.expense.id, {amount: 500}))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(300))

const demoState = {
  expenses: [
    {
      id: 'asdf',
      description: 'january',
      note: 'final',
      amount: 55200,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
