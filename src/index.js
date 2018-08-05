import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routing/Router';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter getState={store.getState} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
