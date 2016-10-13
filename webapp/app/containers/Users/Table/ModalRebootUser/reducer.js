//
// User reboot modal Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  USERS_SHOW_INSTANT_REBOOT_MODAL,
} from './constants';

const initialState = {
  showModal: false,
};

function UsersRebootModalReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_SHOW_INSTANT_REBOOT_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default UsersRebootModalReducer;
