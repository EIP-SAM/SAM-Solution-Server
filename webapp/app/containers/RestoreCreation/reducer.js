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
  RESET_STATE,
  GET_HISTORY_SAVES_BY_USER,
  USER,
  USER_ID,
  LIST_FILES,
  LIST_SAVES,
  SELECTED_FILES,
} from './constants';

const initialState = {
  user: '',
  userId: '',
  files: [],
  saves: [],
  allSaves: [],
  selectedFiles: [],
};

function RestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return Object.assign({}, initialState, {
        allSaves: [],
      });
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
    case LIST_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}

export default RestoreCreationReducer;
