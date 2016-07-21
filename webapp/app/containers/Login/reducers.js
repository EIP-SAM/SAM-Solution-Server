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
  IS_LOGIN,
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
    case IS_LOGIN:
      return Object.assign({}, state, {
        isLogin: action.isLogin,
      });
    default:
      return state;
  }
}

export default loginReducer;
