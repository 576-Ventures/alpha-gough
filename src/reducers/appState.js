import { combineReducers } from 'redux';
import auth from './auth';

const appState = combineReducers({
  auth,
});

export default appState;
