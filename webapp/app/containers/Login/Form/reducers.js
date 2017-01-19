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
  LOGIN_SET_WRONG_CREDENTIALS,
} from './constants';

const initialState = {};

function LoginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: action.user,
      });
    case LOGIN_SET_WRONG_CREDENTIALS:
      return Object.assign({}, state, {
        wrongCredentials: action.wrongCredentials,
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
