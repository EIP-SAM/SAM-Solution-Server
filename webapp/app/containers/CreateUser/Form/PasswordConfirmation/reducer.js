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
} from './constants';

const initialState = {
  passwordConfirmation: '',
};

function CreateUserFormPasswordConfirmationReducer(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_CONFIRMATION_CHANGE:
      return Object.assign({}, state, {
        passwordConfirmation: action.passwordConfirmation,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordConfirmationReducer;
