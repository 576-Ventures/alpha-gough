import { GET_USER, LOGIN, UPDATE_USER } from '../actions/auth';
const initialState = {
  user: {},
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.value,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.value,
      };
    default:
      return state
  }
}

export default auth;
