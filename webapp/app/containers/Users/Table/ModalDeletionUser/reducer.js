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
  SHOW_INSTANT_DELETE_MODAL,
  USER_TO_DELETE,
} from './constants';

const initialState = {
  showModal: false,
  username: '',
  userId: -1,
};

function UsersDeletionModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_INSTANT_DELETE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case USER_TO_DELETE:
      return Object.assign({}, state, {
        username: action.username,
        userId: action.userId,
      });
    default:
      return state;
  }
}

export default UsersDeletionModalReducer;
