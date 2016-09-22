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
  SET_USER_INFO,
} from './constants';

const initialState = { username: 'Enter your username', password: 'Enter your password' };

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {});
    case SAVE_DATA:
      return Object.assign({}, state, {
        username: action.username,
        password: action.password,
      });
    case SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
      });
    default:
      return state;
  }
}

export default loginReducer;
