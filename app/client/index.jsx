import React from 'react'
import {render} from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import apolloClient from '../imports/ui/apollo-client'

import { renderRoutes } from '../imports/startup/client/routes.js';
import store from '../imports/ui/store/store';
render(
  <ApolloProvider client={apolloClient} store={store}>
    {renderRoutes()}
  </ApolloProvider>,
  document.getElementById('root'))
