//
// Password form edit user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_USER_PASSWORD_CHANGE,
  EDIT_USER_RESET_STATE_PASSWORD,
  EDIT_USER_PASSWORD_ERROR,
} from './constants';

const initialState = {
  password: '',
  passwordError: '',
};

function EditUserFormPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_RESET_STATE_PASSWORD:
      return Object.assign({}, initialState, {});
    case EDIT_USER_PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password,
      });
    case EDIT_USER_PASSWORD_ERROR:
      return Object.assign({}, state, {
        passwordError: action.passwordError,
      });
    default:
      return state;
  }
}

export default EditUserFormPasswordReducer;
