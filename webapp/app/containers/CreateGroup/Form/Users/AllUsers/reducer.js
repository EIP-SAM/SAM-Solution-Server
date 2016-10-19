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
} from './constants';

const initialState = {
  users: [],
  preSelectedUsers: [],
};

function CreateGroupFormUsersAllUsersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case CREATE_GROUP_PRE_SELECTED_USERS:
      return Object.assign({}, state, {
        preSelectedUsers: action.preSelectedUsers,
      });
    default:
      return state;
  }
}

export default CreateGroupFormUsersAllUsersReducer;
