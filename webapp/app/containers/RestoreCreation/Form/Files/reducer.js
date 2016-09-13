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
  RESET_STATE_FILES,
  LIST_FILES,
  SELECTED_FILES,
  FILES_ERROR,
} from './constants';

const initialState = {
  files: [],
  selectedFiles: [],
  filesError: '',
};

function FilesRestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_FILES:
      return Object.assign({}, initialState, {});
    case LIST_FILES:
      return Object.assign({}, state, {
        files: action.files,
      });
    case SELECTED_FILES:
      return Object.assign({}, state, {
        selectedFiles: action.selectedFiles,
      });
    case FILES_ERROR:
      return Object.assign({}, state, {
        filesError: action.filesError,
      });
    default:
      return state;
  }
}

export default FilesRestoreCreationReducer;
