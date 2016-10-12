//
// Username form edit user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_USER_USERNAME_CHANGE,
  EDIT_USER_RESET_STATE_USERNAME,
  EDIT_USER_USERNAME_ERROR,
} from './constants';

const initialState = {
  username: '',
  usernameError: '',
};

function EditUserFormUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_RESET_STATE_USERNAME:
      return Object.assign({}, initialState, {});
    case EDIT_USER_USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username,
      });
    case EDIT_USER_USERNAME_ERROR:
      return Object.assign({}, state, {
        usernameError: action.usernameError,
      });
    default:
      return state;
  }
}

export default EditUserFormUsernameReducer;
