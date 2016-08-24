//
// Instant save modal save page  Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SHOW_INSTANT_SAVE_MODAL,
} from './constants';

function SaveTableInstantSaveModalReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_INSTANT_SAVE_MODAL:
      return Object.assign({}, state, {
        showInstantSaveModal: action.showInstantSaveModal,
      });
    default:
      return state;
  }
}

export default SaveTableInstantSaveModalReducer;
