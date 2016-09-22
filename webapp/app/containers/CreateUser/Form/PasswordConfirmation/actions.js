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
  PASSWORD_CONFIRMATION_CHANGE,
  RESET_STATE_PASSWORD_CONFIRMATION,
  PASSWORD_CONFIRMATION_ERROR,
} from './constants';

export function resetStatePasswordConfirmation() {
  return {
    type: RESET_STATE_PASSWORD_CONFIRMATION,
  };
}

export function passwordConfirmationChange(passwordConfirmation) {
  return {
    type: PASSWORD_CONFIRMATION_CHANGE,
    passwordConfirmation,
  };
}

export function passwordConfirmationErrorMsg(passwordConfirmationError) {
  return {
    type: PASSWORD_CONFIRMATION_ERROR,
    passwordConfirmationError,
  };
}
