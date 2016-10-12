//
// Password confirmation form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_USER_PASSWORD_CONFIRMATION_CHANGE,
  EDIT_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  EDIT_USER_PASSWORD_CONFIRMATION_ERROR,
} from './constants';

const initialState = {
  passwordConfirmation: '',
  passwordConfirmationError: '',
};

function EditUserFormPasswordConfirmationReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER_RESET_STATE_PASSWORD_CONFIRMATION:
      return Object.assign({}, initialState, {});
    case EDIT_USER_PASSWORD_CONFIRMATION_CHANGE:
      return Object.assign({}, state, {
        passwordConfirmation: action.passwordConfirmation,
      });
    case EDIT_USER_PASSWORD_CONFIRMATION_ERROR:
      return Object.assign({}, state, {
        passwordConfirmationError: action.passwordConfirmationError,
      });
    default:
      return state;
  }
}

export default EditUserFormPasswordConfirmationReducer;
