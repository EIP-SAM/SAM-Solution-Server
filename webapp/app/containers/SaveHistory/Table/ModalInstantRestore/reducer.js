//
// Instant restore modal save history page Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_HISTORY_SHOW_INSTANT_RESTORE_MODAL,
  SAVE_HISTORY_INSTANT_RESTORE,
  SAVE_HISTORY_RESET_RESTORE_STATE,
} from './constants';

const initialState = {
  showInstantRestoreModal: false,
  userId: -1,
  saveId: -1,
  files: '',
};

function SaveHistoryTableInstantRestoreModalReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_HISTORY_RESET_RESTORE_STATE:
      return Object.assign({}, initialState, {
      });
    case SAVE_HISTORY_SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showInstantRestoreModal: action.showInstantRestoreModal,
      });
    case SAVE_HISTORY_INSTANT_RESTORE:
      return Object.assign({}, state, {
        userId: action.userId,
        saveId: action.saveId,
        files: action.files,
      });
    default:
      return state;
  }
}

export default SaveHistoryTableInstantRestoreModalReducer;
