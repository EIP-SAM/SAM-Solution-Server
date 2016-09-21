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
} from './constants';

export function passwordConfirmationChange(passwordConfirmation) {
  return {
    type: PASSWORD_CONFIRMATION_CHANGE,
    passwordConfirmation,
  };
}
