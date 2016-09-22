//
// Password form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  PASSWORD_CHANGE,
  RESET_STATE_PASSWORD,
  PASSWORD_ERROR,
} from './constants';

const initialState = {
  password: '',
  passwordError: '',
};

function CreateUserFormPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_PASSWORD:
      return Object.assign({}, initialState, {});
    case PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password,
      });
    case PASSWORD_ERROR:
      return Object.assign({}, state, {
        passwordError: action.passwordError,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordReducer;
