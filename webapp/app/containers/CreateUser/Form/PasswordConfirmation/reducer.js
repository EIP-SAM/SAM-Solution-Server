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
  CREATE_USER_PASSWORD_CONFIRMATION_CHANGE,
  CREATE_USER_RESET_STATE_PASSWORD_CONFIRMATION,
  CREATE_USER_PASSWORD_CONFIRMATION_ERROR,
} from './constants';

const initialState = {
  passwordConfirmation: '',
  passwordConfirmationError: '',
};

function CreateUserFormPasswordConfirmationReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_RESET_STATE_PASSWORD_CONFIRMATION:
      return Object.assign({}, initialState, {});
    case CREATE_USER_PASSWORD_CONFIRMATION_CHANGE:
      return Object.assign({}, state, {
        passwordConfirmation: action.passwordConfirmation,
      });
    case CREATE_USER_PASSWORD_CONFIRMATION_ERROR:
      return Object.assign({}, state, {
        passwordConfirmationError: action.passwordConfirmationError,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordConfirmationReducer;
