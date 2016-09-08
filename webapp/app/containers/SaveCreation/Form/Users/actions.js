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
  RESET_STATE_USERS,
  LIST_USERS,
  LIST_USERS_ERROR,
} from './constants';

export function resetStateUsers() {
  return {
    type: RESET_STATE_USERS,
  };
}

export function listUsers(users) {
  return {
    type: LIST_USERS,
    users,
  };
}

export function userErrorMsg(userError) {
  return {
    type: LIST_USERS_ERROR,
    userError,
  };
}
