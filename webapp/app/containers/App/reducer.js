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
  APP_SET_USER_INFO,
  APP_SET_APP_LOADING_STATE,
} from './constants';

export default function AppReducer(state = {}, action) {
  switch (action.type) {
    case APP_SET_APP_LOADING_STATE:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    case APP_SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
      });
    default:
      return state;
  }
}
