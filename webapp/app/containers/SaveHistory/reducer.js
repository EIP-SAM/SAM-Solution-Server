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
} from './constants';

const initialState = {
  saves: [],
  showDeletionModal: false,
  showInstantSaveModal: false,
  saveId: '',
  saveScheduledId: '',
  username: '',
};

function SaveHistoryReducer(state = initialState, action) {
  switch (action.type) {
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
