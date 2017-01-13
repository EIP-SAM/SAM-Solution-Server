//
// Selected users form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_ADD_USERS,
  NOTIFICATIONS_UNSELECTED_USERS,
  NOTIFICATIONS_REMOVE_SELECTED_USERS,
  NOTIFICATIONS_RESET_STATE_UNSELECTED_USERS,
  NOTIFICATIONS_SELECTED_USERS_ERROR,
} from './constants';

const initialState = {
  selectedUsers: [],
  unselectedUsers: [],
  selectedUsersError: '',
};

function NotificationsFormSelectedUsersReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_UNSELECTED_USERS:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_ADD_USERS:
      return Object.assign({}, state, {
        selectedUsers: action.selectedUsers,
      });
    case NOTIFICATIONS_UNSELECTED_USERS:
      return Object.assign({}, state, {
        unselectedUsers: action.unselectedUsers,
      });
    case NOTIFICATIONS_REMOVE_SELECTED_USERS:
      return Object.assign({}, state, {
        selectedUsers: [
          ...state.selectedUsers.slice(0, action.index),
          ...state.selectedUsers.slice(action.index + 1),
        ],
        unselectedUsers: (action.nextIndex !== -1) ? [state.selectedUsers[action.nextIndex]] : [],
      });
<<<<<<< HEAD
      case NOTIFICATIONS_SELECTED_USERS_ERROR:
        return Object.assign({}, state, {
          selectedUsersError: action.selectedUsersError,
      });
      default:
        return state;
=======
    case NOTIFICATIONS_SELECTED_USERS_ERROR:
      return Object.assign({}, state, {
        selectedUsersError: action.selectedUsersError,
      });
    default:
      return state;
>>>>>>> 4ca1ba85acd5f33abd04add0824831aaa8aef649
  }
}

export default NotificationsFormSelectedUsersReducer;
