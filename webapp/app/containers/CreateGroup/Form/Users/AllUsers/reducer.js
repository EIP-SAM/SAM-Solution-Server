//
// All users form create group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_GROUP_GET_USERS,
  CREATE_GROUP_PRE_SELECTED_USERS,
  CREATE_GROUP_REMOVE_USERS,
  CREATE_GROUP_RESET_STATE_ALL_USERS,
} from './constants';

const initialState = {
  users: [],
  preSelectedUsers: [],
};

function CreateGroupFormUsersAllUsersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_RESET_STATE_ALL_USERS:
      return Object.assign({}, initialState, {});
    case CREATE_GROUP_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case CREATE_GROUP_PRE_SELECTED_USERS:
      return Object.assign({}, state, {
        preSelectedUsers: action.preSelectedUsers,
      });
    case CREATE_GROUP_REMOVE_USERS:
      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, action.index),
          ...state.users.slice(action.index + 1),
        ],
        preSelectedUsers: (action.index + 1 < state.users.length) ? [state.users[action.index + 1]] : [],
      });
    default:
      return state;
  }
}

export default CreateGroupFormUsersAllUsersReducer;
