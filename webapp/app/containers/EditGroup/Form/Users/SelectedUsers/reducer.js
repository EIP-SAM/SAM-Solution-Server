//
// All users form edit group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_GROUP_ADD_USERS_IN_GROUP,
  EDIT_GROUP_UNSELECTED_USERS,
  EDIT_GROUP_REMOVE_SELECTED_USERS,
} from './constants';

const initialState = {
  selectedUsers: [],
  unselectedUsers: [],
};

function EditGroupFormUsersSelectedUsersReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_ADD_USERS_IN_GROUP:
      return Object.assign({}, state, {
        selectedUsers: action.selectedUsers,
      });
    case EDIT_GROUP_UNSELECTED_USERS:
      return Object.assign({}, state, {
        unselectedUsers: action.unselectedUsers,
      });
    case EDIT_GROUP_REMOVE_SELECTED_USERS:
      return Object.assign({}, state, {
        selectedUsers: [
          ...state.selectedUsers.slice(0, action.index),
          ...state.selectedUsers.slice(action.index + 1),
        ],
        unselectedUsers: [],
      });
    default:
      return state;
  }
}

export default EditGroupFormUsersSelectedUsersReducer;
