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
  USERNAME_CHANGE,
  RESET_STATE_USERNAME,
  USERNAME_ERROR,
} from './constants';

const initialState = {
  username: '',
  usernameError: '',
};

function CreateUserFormUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_USERNAME:
      return Object.assign({}, initialState, {});
    case USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username,
      });
    case USERNAME_ERROR:
      return Object.assign({}, state, {
        usernameError: action.usernameError,
      });
    default:
      return state;
  }
}

export default CreateUserFormUsernameReducer;
