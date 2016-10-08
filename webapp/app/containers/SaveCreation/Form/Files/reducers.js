//
// Files save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SaveCreationFormFilesModalReducer from './Modal/reducer';

import {
  SAVE_CREATION_RESET_STATE_FILES,
  SAVE_CREATION_ADD_FILE,
  SAVE_CREATION_ADD_ALL_FILES,
  SAVE_CREATION_CAN_ADD_FILE,
  SAVE_CREATION_ADD_FILE_ERROR,
} from './constants';

const initialState = {
  canAddFile: true,
  files: [],
  fileError: '',
};

function SaveCreationFormFilesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATION_RESET_STATE_FILES:
      return Object.assign({}, initialState, {});
    case SAVE_CREATION_CAN_ADD_FILE:
      return Object.assign({}, state, {
        canAddFile: action.canAddFile,
      });
    case SAVE_CREATION_ADD_FILE_ERROR:
      return Object.assign({}, state, {
        fileError: action.fileError,
      });
    case SAVE_CREATION_ADD_FILE:
      return Object.assign({}, state, {
        files: [
          ...state.files,
          action.file,
        ],
      });
    case SAVE_CREATION_ADD_ALL_FILES:
      return Object.assign({}, state, {
        files: action.files.split(','),
      });
    default:
      return state;
  }
}

export default combineReducers({
  SaveCreationFormFilesReducer,
  SaveCreationFormFilesModalReducer,
});
