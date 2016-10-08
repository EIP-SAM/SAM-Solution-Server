//
// Instant restore modal restore actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//


import {
  RESTORE_SHOW_INSTANT_RESTORE_MODAL,
} from './constants';

export function showInstantRestoreModal() {
  return {
    type: RESTORE_SHOW_INSTANT_RESTORE_MODAL,
    showModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: RESTORE_SHOW_INSTANT_RESTORE_MODAL,
    showModal: false,
  };
}
