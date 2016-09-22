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
  EMAIL_CHANGE,
  RESET_STATE_EMAIL,
  EMAIL_ERROR,
} from './constants';

const initialState = {
  email: '',
  emailError: '',
};

function CreateUserFormEmailReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_EMAIL:
      return Object.assign({}, initialState, {});
    case EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email,
      });
    case EMAIL_ERROR:
      return Object.assign({}, state, {
        emailError: action.emailError,
      });
    default:
      return state;
  }
}

export default CreateUserFormEmailReducer;
