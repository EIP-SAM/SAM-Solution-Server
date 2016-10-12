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
  SAVE_CREATION_RESET_STATE_FILES,
  SAVE_CREATION_ADD_FILE,
  SAVE_CREATION_ADD_ALL_FILES,
  SAVE_CREATION_CAN_ADD_FILE,
  SAVE_CREATION_ADD_FILE_ERROR,
} from './constants';

export function resetStateFiles() {
  return {
    type: SAVE_CREATION_RESET_STATE_FILES,
  };
}

export function addFile(file) {
  return {
    type: SAVE_CREATION_ADD_FILE,
    file,
  };
}

export function addAllFiles(files) {
  return {
    type: SAVE_CREATION_ADD_ALL_FILES,
    files,
  };
}

export function displayAddFile(canAddFile) {
  return {
    type: SAVE_CREATION_CAN_ADD_FILE,
    canAddFile,
  };
}

export function fileErrorMsg(fileError) {
  return {
    type: SAVE_CREATION_ADD_FILE_ERROR,
    fileError,
  };
}
