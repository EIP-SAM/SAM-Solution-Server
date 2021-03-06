//
// Instant save modal save page  Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//


import SAVE_SHOW_INSTANT_SAVE_MODAL from './constants';

export function showInstantSaveModal() {
  return {
    type: SAVE_SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: true,
  };
}

export function hideInstantSaveModal() {
  return {
    type: SAVE_SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: false,
  };
}
