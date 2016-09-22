//
// Username form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  USERNAME_CHANGE,
  RESET_STATE_USERNAME,
  USERNAME_ERROR,
} from './constants';

export function resetStateUsername() {
  return {
    type: RESET_STATE_USERNAME,
  };
}

export function usernameChange(username) {
  return {
    type: USERNAME_CHANGE,
    username,
  };
}

export function usernameErrorMsg(usernameError) {
  return {
    type: USERNAME_ERROR,
    usernameError,
  };
}
