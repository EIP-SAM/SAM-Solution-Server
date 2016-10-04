//
// Login form reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import LoginFormUsernameReducer from './Username/reducer';
import LoginFormPasswordReducer from './Password/reducer';

import {
  LOGIN,
  SET_USER_INFO,
} from './constants';

const initialState = {};

function LoginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: action.user,
      });
    case SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
      });
    default:
      return state;
  }
}

export default combineReducers({
  LoginFormReducer,
  LoginFormUsernameReducer,
  LoginFormPasswordReducer,
});
