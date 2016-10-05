//
// Password form login actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  LOGIN_PASSWORD_CHANGE,
  LOGIN_RESET_STATE_PASSWORD,
  LOGIN_PASSWORD_ERROR,
} from './constants';

export function resetStatePassword() {
  return {
    type: LOGIN_RESET_STATE_PASSWORD,
  };
}

export function passwordChange(password) {
  return {
    type: LOGIN_PASSWORD_CHANGE,
    password,
  };
}

export function passwordErrorMsg(passwordError) {
  return {
    type: LOGIN_PASSWORD_ERROR,
    passwordError,
  };
}
