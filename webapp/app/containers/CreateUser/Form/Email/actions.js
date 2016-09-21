//
// Email form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import {
  EMAIL_CHANGE,
} from './constants';

export function emailChange(email) {
  return {
    type: EMAIL_CHANGE,
    email,
  };
}
