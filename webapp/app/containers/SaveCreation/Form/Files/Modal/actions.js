//
// Files modal form save creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  SAVE_CREATION_SHOW_ADD_FILE_MODAL,
  SAVE_CREATION_INPUT_FILE_CHANGE,
} from './constants';

export function showModal() {
  return {
    type: SAVE_CREATION_SHOW_ADD_FILE_MODAL,
    showModal: true,
  };
}

export function hideModal() {
  return {
    type: SAVE_CREATION_SHOW_ADD_FILE_MODAL,
    showModal: false,
  };
}

export function inputFileChange(file) {
  return {
    type: SAVE_CREATION_INPUT_FILE_CHANGE,
    inputFileChange: file,
  };
}
