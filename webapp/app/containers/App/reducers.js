//
// App reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SET_USER_INFO,
} from './constants';

export default function AppReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
      });
    default:
      return state;
  }
}
