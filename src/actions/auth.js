export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (value) => ({
  type: UPDATE_USER,
  value,
});

export const LOGIN = 'LOGIN';
export const login = (value) => {
  const expiryInStorage = window.localStorage.getItem('tokenExpiry');
  const expiry = value._token.expiresAt;
  // eslint-disable-next-line no-mixed-operators
  if (!expiryInStorage || expiryInStorage && new Date(Number(expiryInStorage)) < new Date(expiry)) {
    window.localStorage.setItem('token', JSON.stringify(value));
  }
  return ({
    type: LOGIN,
    value,
  });
};

