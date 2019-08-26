/* Imports ======================================================================================= */
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

/* Components ==================================================================================== */
import AddPage from '../components/add-page'
import Dashboard from '../components/dashboard'
import EditPage from '../components/edit-page'
import NotFound from '../components/404'
import Login from '../components/login'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddPage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
