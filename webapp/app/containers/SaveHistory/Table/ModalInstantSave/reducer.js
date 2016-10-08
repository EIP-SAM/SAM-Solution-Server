//
// Instant save modal save history page Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_HISTORY_SHOW_INSTANT_SAVE_MODAL,
} from './constants';

const initialState = {
  showInstantSaveModal: false,
};

function SaveHistoryTableInstantSaveModalReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_HISTORY_SHOW_INSTANT_SAVE_MODAL:
      return Object.assign({}, state, {
        showInstantSaveModal: action.showInstantSaveModal,
      });
    default:
      return state;
  }
}

export default SaveHistoryTableInstantSaveModalReducer;
