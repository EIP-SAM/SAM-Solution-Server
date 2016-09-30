//
// Password confirmation form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EDIT_USER_PASSWORD_CONFIRMATION_CHANGE,
  EDIT_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  EDIT_USER_PASSWORD_CONFIRMATION_ERROR,
} from './constants';

export function resetStatePasswordConfirmation() {
  return {
    type: EDIT_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  };
}

export function passwordConfirmationChange(passwordConfirmation) {
  return {
    type: EDIT_USER_PASSWORD_CONFIRMATION_CHANGE,
    passwordConfirmation,
  };
}

export function passwordConfirmationErrorMsg(passwordConfirmationError) {
  return {
    type: EDIT_USER_PASSWORD_CONFIRMATION_ERROR,
    passwordConfirmationError,
  };
}
