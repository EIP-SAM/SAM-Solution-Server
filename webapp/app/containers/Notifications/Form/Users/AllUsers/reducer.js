//
// All users form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_GET_USERS,
  NOTIFICATIONS_PRE_SELECTED_USERS,
  NOTIFICATIONS_REMOVE_USERS,
  NOTIFICATIONS_RESET_STATE_ALL_USERS,
} from './constants';

const initialState = {
  users: [],
  preSelectedUsers: [],
};

function NotificationsFormAllUsersReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_ALL_USERS:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case NOTIFICATIONS_PRE_SELECTED_USERS:
      return Object.assign({}, state, {
        preSelectedUsers: action.preSelectedUsers,
      });
    case NOTIFICATIONS_REMOVE_USERS:
      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, action.index),
          ...state.users.slice(action.index + 1),
        ],
        preSelectedUsers: (action.nextIndex !== -1) ? [state.users[action.nextIndex]] : [],
      });
    default:
      return state;
  }
}

export default NotificationsFormAllUsersReducer;
