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
  GET_SAVES,
  GET_USERS,
  SHOW_INSTANT_SAVE_MODAL,
  SHOW_INSTANT_RESTORE_MODAL,
  INSTANT_RESTORE,
  RESET_RESTORE_STATE,
} from './constants';

const initialState = {
  saves: [],
  users: [],
  showInstantSaveModal: false,
  userId: '',
  files: '',
};

function SaveReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_RESTORE_STATE:
      return Object.assign({}, state, {
        userId: '',
        files: '',
        showInstantRestoreModal: false,
      });
    case GET_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case SHOW_INSTANT_SAVE_MODAL:
      return Object.assign({}, state, {
        showInstantSaveModal: action.showInstantSaveModal,
      });
    case SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showInstantRestoreModal: action.showInstantRestoreModal,
      });
    case INSTANT_RESTORE:
      return Object.assign({}, state, {
        userId: action.userId,
        files: action.files,
      });
    default:
      return state;
  }
}

export default SaveReducer;
