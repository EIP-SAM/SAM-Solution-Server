//
// Username form create user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  USERNAME_CHANGE,
} from './constants';

const initialState = {
  username: '',
};

function CreateUserFormUsernameReducer(state = initialState, action) {
  switch (action.type) {
    case USERNAME_CHANGE:
      return Object.assign({}, state, {
        username: action.username,
      });
    default:
      return state;
  }
}

export default CreateUserFormUsernameReducer;
