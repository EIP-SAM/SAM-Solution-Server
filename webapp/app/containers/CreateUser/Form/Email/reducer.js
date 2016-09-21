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
} from './constants';

const initialState = {
  email: '',
};

function CreateUserFormEmailReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.email,
      });
    default:
      return state;
  }
}

export default CreateUserFormEmailReducer;
