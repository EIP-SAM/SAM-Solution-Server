//
// Save reducer

import {
  LOGIN,
} from './constants';

function loginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        login: action.username,
        passowrd: action.password,
      });
    default:
      return state;
  }
}

export default loginReducer;
