import Education from '../reducers';
import apolloClient from '../apollo-client.js';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';

const store = createStore(Education, applyMiddleware(apolloClient.middleware(), promiseMiddleware))
export default store;
