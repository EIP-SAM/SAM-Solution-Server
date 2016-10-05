//
// Username form login reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  LOGIN_USERNAME_CHANGE,
  LOGIN_RESET_STATE_USERNAME,
  LOGIN_USERNAME_ERROR,
} from './constants';

const initialState = {
  username: '',
  usernameError: '',
};

function LoginFormUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_RESET_STATE_USERNAME:
      return Object.assign({}, initialState, {});
    case LOGIN_USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username,
      });
    case LOGIN_USERNAME_ERROR:
      return Object.assign({}, state, {
        usernameError: action.usernameError,
      });
    default:
      return state;
  }
}

export default LoginFormUsernameReducer;
