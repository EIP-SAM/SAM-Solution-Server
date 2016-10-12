//
// Files form restore creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESTORE_CREATION_RESET_STATE_FILES,
  RESTORE_CREATION_LIST_FILES,
  RESTORE_CREATION_SELECTED_FILES,
  RESTORE_CREATION_FILES_ERROR,
} from './constants';

const initialState = {
  files: [],
  selectedFiles: [],
  filesError: '',
};

function FilesRestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_CREATION_RESET_STATE_FILES:
      return Object.assign({}, initialState, {});
    case RESTORE_CREATION_LIST_FILES:
      return Object.assign({}, state, {
        files: action.files,
      });
    case RESTORE_CREATION_SELECTED_FILES:
      return Object.assign({}, state, {
        selectedFiles: action.selectedFiles,
      });
    case RESTORE_CREATION_FILES_ERROR:
      return Object.assign({}, state, {
        filesError: action.filesError,
      });
    default:
      return state;
  }
}

export default FilesRestoreCreationReducer;
