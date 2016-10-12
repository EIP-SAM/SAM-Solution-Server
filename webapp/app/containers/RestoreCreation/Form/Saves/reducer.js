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
  RESTORE_CREATION_RESET_STATE_SAVES,
  RESTORE_CREATION_GET_HISTORY_SAVES_BY_USER_RESTORE,
  RESTORE_CREATION_SELECTED_SAVE,
  RESTORE_CREATION_SAVE_ERROR,
} from './constants';

const initialState = {
  save: {},
  allSaves: [],
  saveError: '',
};

function SavesRestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_CREATION_RESET_STATE_SAVES:
      return Object.assign({}, initialState, {});
    case RESTORE_CREATION_GET_HISTORY_SAVES_BY_USER_RESTORE:
      return Object.assign({}, state, {
        allSaves: action.allSaves,
      });
    case RESTORE_CREATION_SELECTED_SAVE:
      return Object.assign({}, state, {
        save: action.save,
      });
    case RESTORE_CREATION_SAVE_ERROR:
      return Object.assign({}, state, {
        saveError: action.saveError,
      });
    default:
      return state;
  }
}

export default SavesRestoreCreationReducer;
