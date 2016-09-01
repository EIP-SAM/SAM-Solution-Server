//
// Users form save creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  LIST_USERS_ERROR,
} from './constants';

export function userErrorMsg(userError) {
  return {
    type: LIST_USERS_ERROR,
    userError,
  };
}
