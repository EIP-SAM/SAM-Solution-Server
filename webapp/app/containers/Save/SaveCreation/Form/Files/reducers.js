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
  CAN_ADD_FILE,
  ADD_FILE_ERROR,
} from './constants';

const initialState = {
  canAddFile: true,
  fileError: '',
};

function SaveCreationFormFilesReducer(state = initialState, action) {
  switch (action.type) {
    case CAN_ADD_FILE:
      return Object.assign({}, state, {
        canAddFile: action.canAddFile,
      });
    case ADD_FILE_ERROR:
      return Object.assign({}, state, {
        fileError: action.fileError,
      });
    default:
      return state;
  }
}

export default combineReducers({
  SaveCreationFormFilesReducer,
  SaveCreationFormFilesModalReducer,
});
