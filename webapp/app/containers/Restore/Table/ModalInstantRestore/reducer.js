//
// Instant restore modal restore reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import RESTORE_SHOW_INSTANT_RESTORE_MODAL from './constants';

const initialState = {
  showModal: false,
};

function InstantRestoreModalRestoreReducer(state = initialState, action) {
  switch (action.type) {
    case RESTORE_SHOW_INSTANT_RESTORE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default InstantRestoreModalRestoreReducer;
