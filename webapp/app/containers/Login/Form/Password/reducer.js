//
// Password form login reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  LOGIN_PASSWORD_CHANGE,
  LOGIN_RESET_STATE_PASSWORD,
  LOGIN_PASSWORD_ERROR,
} from './constants';

const initialState = {
  password: '',
  passwordError: '',
};

function LoginFormPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_RESET_STATE_PASSWORD:
      return Object.assign({}, initialState, {});
    case LOGIN_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password,
      });
    case LOGIN_PASSWORD_ERROR:
      return Object.assign({}, state, {
        passwordError: action.passwordError,
      });
    default:
      return state;
  }
}

export default LoginFormPasswordReducer;
