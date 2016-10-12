//
// Password form edit user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EDIT_USER_PASSWORD_CHANGE,
  EDIT_USER_RESET_STATE_PASSWORD,
  EDIT_USER_PASSWORD_ERROR,
} from './constants';

export function resetStatePassword() {
  return {
    type: EDIT_USER_RESET_STATE_PASSWORD,
  };
}

export function passwordChange(password) {
  return {
    type: EDIT_USER_PASSWORD_CHANGE,
    password,
  };
}

export function passwordErrorMsg(passwordError) {
  return {
    type: EDIT_USER_PASSWORD_ERROR,
    passwordError,
  };
}
