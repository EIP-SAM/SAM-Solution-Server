//
// Email form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_USER_EMAIL_CHANGE,
  EDIT_USER_RESET_STATE_EMAIL,
  EDIT_USER_EMAIL_ERROR,
} from './constants';

const initialState = {
  email: '',
  emailError: '',
};

function EditUserFormEmailReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_RESET_STATE_EMAIL:
      return Object.assign({}, initialState, {});
    case EDIT_USER_EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email,
      });
    case EDIT_USER_EMAIL_ERROR:
      return Object.assign({}, state, {
        emailError: action.emailError,
      });
    default:
      return state;
  }
}

export default EditUserFormEmailReducer;
