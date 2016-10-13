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
  CREATE_USER_PASSWORD_CHANGE,
  CREATE_USER_RESET_STATE_PASSWORD,
  CREATE_USER_PASSWORD_ERROR,
} from './constants';

const initialState = {
  password: '',
  passwordError: '',
};

function CreateUserFormPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_RESET_STATE_PASSWORD:
      return Object.assign({}, initialState, {});
    case CREATE_USER_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password,
      });
    case CREATE_USER_PASSWORD_ERROR:
      return Object.assign({}, state, {
        passwordError: action.passwordError,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordReducer;
