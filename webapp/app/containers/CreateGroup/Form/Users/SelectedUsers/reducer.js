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
  CREATE_GROUP_ADD_USERS_IN_GROUP,
  CREATE_GROUP_UNSELECTED_USERS,
} from './constants';

const initialState = {
  selectedUsers: [],
  unselectedUsers: [],
};

function CreateGroupFormUsersSelectedUsersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_ADD_USERS_IN_GROUP:
      return Object.assign({}, state, {
        selectedUsers: action.selectedUsers,
      });
    case CREATE_GROUP_UNSELECTED_USERS:
      return Object.assign({}, state, {
        unselectedUsers: action.unselectedUsers,
      });
    default:
      return state;
  }
}

export default CreateGroupFormUsersSelectedUsersReducer;
