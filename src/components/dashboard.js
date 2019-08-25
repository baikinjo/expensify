/* Imports ======================================================================================= */
import React from 'react'

import List from './list'
import ListFilters from './list-filters'
import Summary from './summary'

const Dashboard = () => (
  <div>
    <Summary />
    <ListFilters />
    <List />
  </div>
)

export default Dashboard
