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
  RESET_STATE_USERS,
  USERNAME,
  USER_ID,
} from './constants';

export function resetStateUsers() {
  return {
    type: RESET_STATE_USERS,
  };
}

export function nameUser(username) {
  return {
    type: USERNAME,
    username,
  };
}

export function setUserId(userId) {
  return {
    type: USER_ID,
    userId,
  };
}
