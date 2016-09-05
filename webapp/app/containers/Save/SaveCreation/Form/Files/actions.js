//
// Files form save creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  CAN_ADD_FILE,
  ADD_FILE_ERROR,
} from './constants';

export function displayAddFile(canAddFile) {
  return {
    type: CAN_ADD_FILE,
    canAddFile,
  };
}

export function fileErrorMsg(fileError) {
  return {
    type: ADD_FILE_ERROR,
    fileError,
  };
}
