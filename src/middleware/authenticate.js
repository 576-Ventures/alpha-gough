const authenticate = store => next => action => {
  const { user } = store.getState();
  const { userInStorage } = window.localStorage.get('user');
  debugger;
  if (user._token && user._token.expiresAt > Math.round(new Date()/1000)) {
    console.log('GET YO GOUGH ON FOO');
  }
  return store;
};

export default authenticate;
