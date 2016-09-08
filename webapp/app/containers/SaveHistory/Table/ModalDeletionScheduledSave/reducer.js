//
// Instant save delation modal save history page Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
  DELETE_SCHEDULED_SAVE_INFO,
} from './constants';

const initialState = {
  showDeletionModal: false,
  saveId: -1,
  saveScheduledId: -1,
  username: '',
};

function SaveHistoryTableDeletionModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DELETION_SCHEDULED_SAVE_MODAL:
      return Object.assign({}, state, {
        showDeletionModal: action.showDeletionModal,
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

export default SaveHistoryTableDeletionModalReducer;
