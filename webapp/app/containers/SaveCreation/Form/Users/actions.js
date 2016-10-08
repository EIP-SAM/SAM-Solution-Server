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
  SAVE_CREATION_RESET_STATE_USERS,
  SAVE_CREATION_LIST_USERS,
  SAVE_CREATION_LIST_USERS_ERROR,
} from './constants';

export function resetStateUsers() {
  return {
    type: SAVE_CREATION_RESET_STATE_USERS,
  };
}

//
// Format users
// [{ id: user.id, name: user.name }]
//
export function listUsers(users) {
  return {
    type: SAVE_CREATION_LIST_USERS,
    users,
  };
}

export function userErrorMsg(userError) {
  return {
    type: SAVE_CREATION_LIST_USERS_ERROR,
    userError,
  };
}
