//
// Save Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_HISTORY_SAVES_BY_USER,
  USER,
  USER_ID,
  LIST_FILES,
  SELECTED_SAVE,
  SELECTED_FILES,
  SAVE_ERROR,
  FILES_ERROR,
} from './constants';

const initialState = {
  user: '',
  userId: '',
  files: [],
  save: [],
  allSaves: [],
  selectedFiles: [],
  saveError: '',
  filesError: '',
};

function RestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_SAVES_BY_USER:
      return Object.assign({}, state, {
        allSaves: action.allSaves,
      });
    case USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case USER_ID:
      return Object.assign({}, state, {
        userId: action.userId,
      });
    case LIST_FILES:
      return Object.assign({}, state, {
        files: action.files,
      });
    case SELECTED_FILES:
      return Object.assign({}, state, {
        selectedFiles: action.selectedFiles,
      });
    case SELECTED_SAVE:
      return Object.assign({}, state, {
        save: action.save,
      });
    case SAVE_ERROR:
      return Object.assign({}, state, {
        saveError: action.saveError,
      });
    case FILES_ERROR:
      return Object.assign({}, state, {
        filesError: action.filesError,
      });
    default:
      return state;
  }
}

export default RestoreCreationReducer;
