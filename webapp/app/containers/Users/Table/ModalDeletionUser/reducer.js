//
// User deletion modal Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  USERS_SHOW_INSTANT_DELETE_MODAL,
  USERS_USER_TO_DELETE,
} from './constants';

const initialState = {
  showModal: false,
  userId: -1,
};

function UsersDeletionModalReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_SHOW_INSTANT_DELETE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case USERS_USER_TO_DELETE:
      return Object.assign({}, state, {
        userId: action.userId,
      });
    default:
      return state;
  }
}

export default UsersDeletionModalReducer;
