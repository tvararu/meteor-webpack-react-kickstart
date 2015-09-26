import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import TodoApp from 'todo/TodoApp'

ReactRouterSSR.Run(
  <Route path='/' component={ App }>
    <IndexRoute component={ TodoApp } />
  </Route>
)
