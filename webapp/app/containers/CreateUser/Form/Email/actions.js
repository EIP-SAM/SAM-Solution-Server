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
  EMAIL_CHANGE,
  RESET_STATE_EMAIL,
  EMAIL_ERROR,
} from './constants';

export function resetStateEmail() {
  return {
    type: RESET_STATE_EMAIL,
  };
}

export function emailChange(email) {
  return {
    type: EMAIL_CHANGE,
    email,
  };
}

export function emailErrorMsg(emailError) {
  return {
    type: EMAIL_ERROR,
    emailError,
  };
}
