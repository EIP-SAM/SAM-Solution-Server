//
// Username form edit user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EDIT_USER_USERNAME_CHANGE,
  EDIT_USER_RESET_STATE_USERNAME,
  EDIT_USER_USERNAME_ERROR,
} from './constants';

export function resetStateUsername() {
  return {
    type: EDIT_USER_RESET_STATE_USERNAME,
  };
}

export function usernameChange(username) {
  return {
    type: EDIT_USER_USERNAME_CHANGE,
    username,
  };
}

export function usernameErrorMsg(usernameError) {
  return {
    type: EDIT_USER_USERNAME_ERROR,
    usernameError,
  };
}
