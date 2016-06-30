//
// Login reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  LOGIN,
  SAVE_DATA,
} from './constants';

const initialState = {username: 'Username', password: 'Password'};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {});
    case SAVE_DATA:
      return Object.assign({}, state, {
        username: action.username,
        password: action.password,
      });
    default:
      return state;
  }
}

export default loginReducer;
