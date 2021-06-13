import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import * as routes from './config/routes'
import { Home, Users } from './pages'
import { Layout } from './components'

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route exact path={routes.USERS}>
          <Users />
        </Route>
        <Redirect to={routes.USERS} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
