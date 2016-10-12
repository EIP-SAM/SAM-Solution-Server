//
// Email form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  CREATE_USER_EMAIL_CHANGE,
  CREATE_USER_RESET_STATE_EMAIL,
  CREATE_USER_EMAIL_ERROR,
} from './constants';

export function resetStateEmail() {
  return {
    type: CREATE_USER_RESET_STATE_EMAIL,
  };
}

export function emailChange(email) {
  return {
    type: CREATE_USER_EMAIL_CHANGE,
    email,
  };
}

export function emailErrorMsg(emailError) {
  return {
    type: CREATE_USER_EMAIL_ERROR,
    emailError,
  };
}
