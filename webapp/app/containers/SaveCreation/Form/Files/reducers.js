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
  RESET_STATE_FILES,
  ADD_FILE,
  ADD_ALL_FILES,
  CAN_ADD_FILE,
  ADD_FILE_ERROR,
} from './constants';

const initialState = {
  canAddFile: true,
  files: [],
  fileError: '',
};

function SaveCreationFormFilesReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_FILES:
      return Object.assign({}, initialState, {});
    case CAN_ADD_FILE:
      return Object.assign({}, state, {
        canAddFile: action.canAddFile,
      });
    case ADD_FILE_ERROR:
      return Object.assign({}, state, {
        fileError: action.fileError,
      });
    case ADD_FILE:
      return Object.assign({}, state, {
        files: [
          ...state.files,
          action.file,
        ],
      });
    case ADD_ALL_FILES:
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
