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
  GET_HISTORY_RESTORES_BY_USER,
  SHOW_INSTANT_RESTORE_MODAL,
} from './constants';

function RestoreHistoryReducer(state = {}, action) {
  switch (action.type) {
    case GET_HISTORY_RESTORES_BY_USER:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    case SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default RestoreHistoryReducer;
