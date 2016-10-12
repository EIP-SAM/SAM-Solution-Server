//
// Instant restore modal save page Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_SHOW_INSTANT_RESTORE_MODAL,
  SAVE_INSTANT_RESTORE,
  SAVE_RESET_RESTORE_STATE,
} from './constants';

const initialState = {
  showInstantRestoreModal: false,
  userId: -1,
  saveId: -1,
  files: '',
};

function SaveTableInstantRestoreModalReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESET_RESTORE_STATE:
      return Object.assign({}, initialState, {});
    case SAVE_SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showInstantRestoreModal: action.showInstantRestoreModal,
      });
    case SAVE_INSTANT_RESTORE:
      return Object.assign({}, state, {
        userId: action.userId,
        saveId: action.saveId,
        files: action.files,
      });
    default:
      return state;
  }
}

export default SaveTableInstantRestoreModalReducer;
