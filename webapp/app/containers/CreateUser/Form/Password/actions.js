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
  CREATE_USER_PASSWORD_CHANGE,
  CREATE_USER_RESET_STATE_PASSWORD,
  CREATE_USER_PASSWORD_ERROR,
} from './constants';

export function resetStatePassword() {
  return {
    type: CREATE_USER_RESET_STATE_PASSWORD,
  };
}

export function passwordChange(password) {
  return {
    type: CREATE_USER_PASSWORD_CHANGE,
    password,
  };
}

export function passwordErrorMsg(passwordError) {
  return {
    type: CREATE_USER_PASSWORD_ERROR,
    passwordError,
  };
}
