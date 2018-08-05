import { connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import gogame from './img/gogame.png';
import facebook from './img/facebook.svg';
import SocialLoginButton from './SocialLoginButton';
import { login } from './actions/auth';
import styles from './styles/LoginForm.js';

const LoginForm = ({ classes, onLogin }) => (
  <div>
    <FormGroup className={classes.loginForm}>
      <h1 className={classes.header}>Go Game</h1>
      <img alt="go-game" className={classes.image} src={gogame} />
      <FormControl>
        <SocialLoginButton
          appId={process.env.REACT_APP_facebookAppId}
          className={classes.facebookLoginButton}
          onLoginFailure={console.err}
          onLoginSuccess={onLogin}
          provider='facebook'
        >
          <img alt="Login to Go Game World with Facebook" className={classes.facebookImage} src={facebook} />
          <span className={classes.facebookLoginButtonText}>Login with Facebook</span>
        </SocialLoginButton>
      </FormControl>
    </FormGroup>
  </div>
);

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: login,
};

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(LoginForm);

