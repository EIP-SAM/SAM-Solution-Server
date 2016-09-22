//
// Password form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  PASSWORD_CHANGE,
  RESET_STATE_PASSWORD,
  PASSWORD_ERROR,
} from './constants';

export function resetStatePassword() {
  return {
    type: RESET_STATE_PASSWORD,
  };
}

export function passwordChange(password) {
  return {
    type: PASSWORD_CHANGE,
    password,
  };
}

export function passwordErrorMsg(passwordError) {
  return {
    type: PASSWORD_ERROR,
    passwordError,
  };
}
