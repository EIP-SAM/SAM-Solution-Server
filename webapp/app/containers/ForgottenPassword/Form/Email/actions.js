//
// ForgottenPassword email form actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  FORGOTTEN_PASSWORD,
  FORGOTTEN_PASSWORD_SAVE_DATA,
} from './constants';

export function onChangeData(email) {
  return {
    type: FORGOTTEN_PASSWORD_SAVE_DATA,
    email,
  };
}

export function forgottenPassword(res) {
  return {
    type: FORGOTTEN_PASSWORD,
    res,
  };
}
