//
// Password form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  PASSWORD_CHANGE,
} from './constants';

export function passwordChange(password) {
  return {
    type: PASSWORD_CHANGE,
    password,
  };
}
