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
} from './constants';

export function usernameChange(username) {
  return {
    type: USERNAME_CHANGE,
    username,
  };
}
