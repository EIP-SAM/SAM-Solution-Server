//
// Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_USERS,
} from './constants';


function usersReducer(state = null, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    default:
      return state;
  }
}

export default usersReducer;
