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
  RESET_STATE_FILES,
  LIST_FILES,
  SELECTED_FILES,
  FILES_ERROR,
} from './constants';

export function resetStateFiles() {
  return {
    type: RESET_STATE_FILES,
  };
}

export function listFiles(files) {
  return {
    type: LIST_FILES,
    files,
  };
}

export function selectFiles(selectedFiles) {
  return {
    type: SELECTED_FILES,
    selectedFiles,
  };
}

export function filesErrorMsg(filesError) {
  return {
    type: FILES_ERROR,
    filesError,
  };
}
