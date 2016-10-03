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
  EDIT_USER_EMAIL_CHANGE,
  EDIT_USER_RESET_STATE_EMAIL,
  EDIT_USER_EMAIL_ERROR,
} from './constants';

export function resetStateEmail() {
  return {
    type: EDIT_USER_RESET_STATE_EMAIL,
  };
}

export function emailChange(email) {
  return {
    type: EDIT_USER_EMAIL_CHANGE,
    email,
  };
}

export function emailErrorMsg(emailError) {
  return {
    type: EDIT_USER_EMAIL_ERROR,
    emailError,
  };
}
