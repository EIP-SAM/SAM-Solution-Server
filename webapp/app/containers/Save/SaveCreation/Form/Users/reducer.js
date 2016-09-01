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
  LIST_USERS_ERROR,
} from './constants';

const initialState = {
  userError: '',
};

function SaveCreationFormUsersReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_USERS_ERROR:
      return Object.assign({}, state, {
        userError: action.userError,
      });
    default:
      return state;
  }
}

export default SaveCreationFormUsersReducer;
