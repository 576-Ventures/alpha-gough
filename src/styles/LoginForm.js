const styles = theme => ({
  facebookImage: {
    display: 'flex',
    height: '32px',
    paddingBottom: '8px',
    paddingRight: '4px',
    width: '32px',
  },
  facebookLoginButton: {
    alignItems: 'center',
    backgroundColor: '#3b5998',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    padding: '8px',
  },
  facebookLoginButtonText: {
    display: 'flex',
    fontSize: '16px',
    padding: '16px 8px',  
    textTransform: 'uppercase',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'fantasy',
    fontSize: '56px',
    letterSpacing: '2px',
    marginBottom: '0px',
    marginTop: '16px',
    textTransform: 'uppercase',
  },
  image: {
    height: theme.spacing.unit * 32,
    paddingBottom: theme.spacing.unit * 4,
    width: theme.spacing.unit * 32,
  },
  loginForm: {
    alignItems: 'center',
    margin: theme.spacing.unit,
  },
  title: {
    height: '70px',
    width: '300px',
  },
});

export default styles;
