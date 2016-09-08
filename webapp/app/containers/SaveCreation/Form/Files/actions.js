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
  RESET_STATE_FILES,
  ADD_FILE,
  ADD_ALL_FILES,
  CAN_ADD_FILE,
  ADD_FILE_ERROR,
} from './constants';

export function resetStateFiles() {
  return {
    type: RESET_STATE_FILES,
  };
}

export function addFile(file) {
  return {
    type: ADD_FILE,
    file,
  };
}

export function addAllFiles(files) {
  return {
    type: ADD_ALL_FILES,
    files,
  };
}

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
