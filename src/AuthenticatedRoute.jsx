import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';

const AuthenticatedRoute = ({ component: Component, ...rest, user }) => (
  <Route
    {...rest}
    render={(props) => {
      let token = user._token;
      let expiry = token ? token.expiresAt : null;
      const now = new Date();
      let tokenInStorage = window.localStorage.getItem('token');
      tokenInStorage = tokenInStorage ? JSON.parse(tokenInStorage) : {};
      const expiryInStorage = tokenInStorage && tokenInStorage._token ? tokenInStorage._token.expiresAt : null;

      if (!expiry && expiryInStorage && new Date(Number(expiryInStorage)) > now) {
        expiry = Number(expiryInStorage);
      }
      if(expiry && new Date(expiry) > now) {
        return (
          <Component {...props} />
        );
      } else { 
        return (
          <LoginForm />
        );
     }}}
  />
);

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
