import { combineReducers } from 'redux';
import apolloClient from '../apollo-client.js';
const Education = combineReducers({
  apollo: apolloClient.reducer(),
})

export default Education
