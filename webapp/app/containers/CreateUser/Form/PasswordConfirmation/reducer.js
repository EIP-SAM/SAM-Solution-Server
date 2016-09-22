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
  PASSWORD_CONFIRMATION_CHANGE,
  RESET_STATE_PASSWORD_CONFIRMATION,
  PASSWORD_CONFIRMATION_ERROR,
} from './constants';

const initialState = {
  passwordConfirmation: '',
  passwordConfirmationError: '',
};

function CreateUserFormPasswordConfirmationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_PASSWORD_CONFIRMATION:
      return Object.assign({}, initialState, {});
    case PASSWORD_CONFIRMATION_CHANGE:
      return Object.assign({}, state, {
        passwordConfirmation: action.passwordConfirmation,
      });
    case PASSWORD_CONFIRMATION_ERROR:
      return Object.assign({}, state, {
        passwordConfirmationError: action.passwordConfirmationError,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordConfirmationReducer;
