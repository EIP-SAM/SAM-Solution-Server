//
// Save Creation Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  SHOW_ADD_FILE_MODAL,
} from './constants';

export function showModal() {
  return {
    type: SHOW_ADD_FILE_MODAL,
    showModal: true,
  };
}

export function hideModal() {
  return {
    type: SHOW_ADD_FILE_MODAL,
    showModal: false,
  };
}
