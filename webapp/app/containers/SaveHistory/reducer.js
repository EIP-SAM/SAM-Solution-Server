//
// Save History Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_HISTORY_SAVES_BY_USER,
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
  SHOW_INSTANT_SAVE_MODAL,
  DELETE_SCHEDULED_SAVE_INFO,
  SHOW_INSTANT_RESTORE_MODAL,
  INSTANT_RESTORE,
  RESET_RESTORE_STATE,
} from './constants';

const initialState = {
  saves: [],
  showDeletionModal: false,
  showInstantSaveModal: false,
  saveId: '',
  saveScheduledId: '',
  username: '',
  showInstantRestoreModal: false,
  userId: '',
  files: '',
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_RESTORE_STATE:
      return Object.assign({}, state, {
        userId: '',
        files: '',
        showInstantRestoreModal: false,
      });
    case GET_HISTORY_SAVES_BY_USER:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    case SHOW_DELETION_SCHEDULED_SAVE_MODAL:
      return Object.assign({}, state, {
        showDeletionModal: action.showDeletionModal,
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
    case DELETE_SCHEDULED_SAVE_INFO:
      return Object.assign({}, state, {
        saveId: action.saveId,
        saveScheduledId: action.saveScheduledId,
        username: action.username,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;
