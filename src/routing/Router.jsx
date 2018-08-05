import App from '../App';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AuthenticatedRoute from '../AuthenticatedRoute';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <AuthenticatedRoute path="/" component={App} />
      </div>
    </Router>
  );
};

export default AppRouter;
