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
  CREATE_USER_PASSWORD_CONFIRMATION_CHANGE,
  CREATE_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  CREATE_USER_PASSWORD_CONFIRMATION_ERROR,
} from './constants';

export function resetStatePasswordConfirmation() {
  return {
    type: CREATE_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  };
}

export function passwordConfirmationChange(passwordConfirmation) {
  return {
    type: CREATE_USER_PASSWORD_CONFIRMATION_CHANGE,
    passwordConfirmation,
  };
}

export function passwordConfirmationErrorMsg(passwordConfirmationError) {
  return {
    type: CREATE_USER_PASSWORD_CONFIRMATION_ERROR,
    passwordConfirmationError,
  };
}

export function checkPasswordConfirmation(password, passwordConfirmation) {
  return function returnCheckPasswordConfirmation(dispatch) {
    if (password.length < passwordConfirmation.length) {
      dispatch(passwordConfirmationErrorMsg('It should be the same password'));
    } else {
      let i = 0;
      while (i < passwordConfirmation.length) {
        if (password[i] !== passwordConfirmation[i]) {
          dispatch(passwordConfirmationErrorMsg('It should be the same password'));
          break;
        }
        i++;
      }
      if (i >= passwordConfirmation.length) {
        dispatch(passwordConfirmationErrorMsg(''));
      }
    }
    dispatch(passwordConfirmationChange(passwordConfirmation));
  };
}
