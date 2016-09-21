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
} from './constants';

const initialState = {
  password: '',
};

function CreateUserFormPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_CHANGE:
      return Object.assign({}, state, {
        password: action.password,
      });
    default:
      return state;
  }
}

export default CreateUserFormPasswordReducer;
