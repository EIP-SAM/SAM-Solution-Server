//
// Users form restore reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  RESET_STATE_USERS,
  USERNAME,
  USER_ID,
} from './constants';

const initialState = {
  username: '',
  userId: -1,
};

function UsersRestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_USERS:
      return Object.assign({}, initialState, {});
    case USERNAME:
      return Object.assign({}, state, {
        username: action.username,
      });
    case USER_ID:
      return Object.assign({}, state, {
        userId: action.userId,
      });
    default:
      return state;
  }
}

export default UsersRestoreCreationReducer;
