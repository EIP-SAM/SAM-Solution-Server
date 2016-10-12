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
  CREATE_USER_USERNAME_CHANGE,
  CREATE_USER_RESET_STATE_USERNAME,
  CREATE_USER_USERNAME_ERROR,
} from './constants';

export function resetStateUsername() {
  return {
    type: CREATE_USER_RESET_STATE_USERNAME,
  };
}

export function usernameChange(username) {
  return {
    type: CREATE_USER_USERNAME_CHANGE,
    username,
  };
}

export function usernameErrorMsg(usernameError) {
  return {
    type: CREATE_USER_USERNAME_ERROR,
    usernameError,
  };
}
