//
// Saves form restore creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESET_STATE_SAVES,
  GET_HISTORY_SAVES_BY_USER_RESTORE,
  SELECTED_SAVE,
  SAVE_ERROR,
} from './constants';

const initialState = {
  save: {},
  allSaves: [],
  saveError: '',
};

function SavesRestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_SAVES:
      return Object.assign({}, initialState, {});
    case GET_HISTORY_SAVES_BY_USER_RESTORE:
      return Object.assign({}, state, {
        allSaves: action.allSaves,
      });
    case SELECTED_SAVE:
      return Object.assign({}, state, {
        save: action.save,
      });
    case SAVE_ERROR:
      return Object.assign({}, state, {
        saveError: action.saveError,
      });
    default:
      return state;
  }
}

export default SavesRestoreCreationReducer;
