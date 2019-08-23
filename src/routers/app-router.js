/* Imports ======================================================================================= */
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

/* Components ==================================================================================== */
import AddPage from '../components/add-page'
import Dashboard from '../components/dashboard'
import EditPage from '../components/edit-page'
import Header from '../components/header'
import HelpPage from '../components/help-page'
import NotFound from '../components/404'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path='/' component={Dashboard} exact={true} />
      <Route path='/create' component={AddPage} />
      <Route path='/edit/:id' component={EditPage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
