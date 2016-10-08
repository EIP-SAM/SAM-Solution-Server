//
// Users form save creation reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_CREATION_RESET_STATE_USERS,
  SAVE_CREATION_LIST_USERS,
  SAVE_CREATION_LIST_USERS_ERROR,
} from './constants';

const initialState = {
  users: [],
  userError: '',
};

function SaveCreationFormUsersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATION_RESET_STATE_USERS:
      return Object.assign({}, initialState, {});
    case SAVE_CREATION_LIST_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case SAVE_CREATION_LIST_USERS_ERROR:
      return Object.assign({}, state, {
        userError: action.userError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormUsersReducer;
