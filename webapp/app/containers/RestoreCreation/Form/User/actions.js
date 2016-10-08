//
// Users form restore creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  RESTORE_CREATION_RESET_STATE_USERS,
  RESTORE_CREATION_USERNAME,
  RESTORE_CREATION_USER_ID,
} from './constants';

export function resetStateUsers() {
  return {
    type: RESTORE_CREATION_RESET_STATE_USERS,
  };
}

export function nameUser(username) {
  return {
    type: RESTORE_CREATION_USERNAME,
    username,
  };
}

export function setUserId(userId) {
  return {
    type: RESTORE_CREATION_USER_ID,
    userId,
  };
}
