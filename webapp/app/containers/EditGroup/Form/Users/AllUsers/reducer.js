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
  EDIT_GROUP_GET_USERS,
  EDIT_GROUP_PRE_SELECTED_USERS,
  EDIT_GROUP_REMOVE_USERS,
} from './constants';

const initialState = {
  users: [],
  preSelectedUsers: [],
};

function EditGroupFormUsersAllUsersReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case EDIT_GROUP_PRE_SELECTED_USERS:
      return Object.assign({}, state, {
        preSelectedUsers: action.preSelectedUsers,
      });
    case EDIT_GROUP_REMOVE_USERS:
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

export default EditGroupFormUsersAllUsersReducer;
