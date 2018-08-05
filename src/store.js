import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import appState from './reducers/appState';

const store = createStore(
  appState,
  applyMiddleware(
    logger,
  ),
);

export default store;
