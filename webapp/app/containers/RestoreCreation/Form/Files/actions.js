//
// Files form restore creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  RESTORE_CREATION_RESET_STATE_FILES,
  RESTORE_CREATION_LIST_FILES,
  RESTORE_CREATION_SELECTED_FILES,
  RESTORE_CREATION_FILES_ERROR,
} from './constants';

export function resetStateFiles() {
  return {
    type: RESTORE_CREATION_RESET_STATE_FILES,
  };
}

export function listFiles(files) {
  return {
    type: RESTORE_CREATION_LIST_FILES,
    files,
  };
}

export function selectFiles(selectedFiles) {
  return {
    type: RESTORE_CREATION_SELECTED_FILES,
    selectedFiles,
  };
}

export function filesErrorMsg(filesError) {
  return {
    type: RESTORE_CREATION_FILES_ERROR,
    filesError,
  };
}
