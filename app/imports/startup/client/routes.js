import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'

import renderMap from '../../ui/containers/app.js'
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={renderMap}>
      <IndexRoute component={renderMap}/>
    </Route>
  </Router>
)
