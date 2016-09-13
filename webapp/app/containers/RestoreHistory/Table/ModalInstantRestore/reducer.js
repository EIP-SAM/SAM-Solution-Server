//
// Instant restore modal restore history reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SHOW_INSTANT_RESTORE_MODAL,
} from './constants';

const initialState = {
  showModal: false,
};

function InstantRestoreModalRestoreHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default InstantRestoreModalRestoreHistoryReducer;
