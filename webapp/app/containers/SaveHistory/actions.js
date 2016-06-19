//
// Save History Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  GET_HISTORY_SAVES_BY_USER,
} from './constants';

export function getSavesByUser(username) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    username,
  };
}
