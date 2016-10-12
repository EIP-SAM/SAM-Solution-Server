//
// Username form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_USER_USERNAME_CHANGE,
  CREATE_USER_RESET_STATE_USERNAME,
  CREATE_USER_USERNAME_ERROR,
} from './constants';

const initialState = {
  username: '',
  usernameError: '',
};

function CreateUserFormUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_RESET_STATE_USERNAME:
      return Object.assign({}, initialState, {});
    case CREATE_USER_USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username,
      });
    case CREATE_USER_USERNAME_ERROR:
      return Object.assign({}, state, {
        usernameError: action.usernameError,
      });
    default:
      return state;
  }
}

export default CreateUserFormUsernameReducer;
