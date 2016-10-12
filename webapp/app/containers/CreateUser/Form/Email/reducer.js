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
  CREATE_USER_EMAIL_CHANGE,
  CREATE_USER_RESET_STATE_EMAIL,
  CREATE_USER_EMAIL_ERROR,
} from './constants';

const initialState = {
  email: '',
  emailError: '',
};

function CreateUserFormEmailReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_RESET_STATE_EMAIL:
      return Object.assign({}, initialState, {});
    case CREATE_USER_EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email,
      });
    case CREATE_USER_EMAIL_ERROR:
      return Object.assign({}, state, {
        emailError: action.emailError,
      });
    default:
      return state;
  }
}

export default CreateUserFormEmailReducer;
