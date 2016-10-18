//
// CreateGroup Form Users AllUsers reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_USERS,
} from './constants';

const initialState = {
  groups: [],
  selectedGroup: [],
};

function CreateUserFormUsersAllUsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    default:
      return state;
  }
}

export default CreateUserFormUsersAllUsersReducer;
