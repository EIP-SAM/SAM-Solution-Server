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
} from './constants';

function SaveHistoryReducer(state = {}, action) {
  switch (action.type) {
    case GET_HISTORY_SAVES_BY_USER:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    case SHOW_DELETION_SCHEDULED_SAVE_MODAL:
      return Object.assign({}, state, {
        showDeletionModal: action.showDeletionModal,
      });
    default:
      return state;
  }
}

export default SaveHistoryReducer;
