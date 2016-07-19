//
// EditUser reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_USER,
  GET_CURRENT_USER,
  EDIT_USER,
  GET_GROUPS,
} from './constants';

function editUserReducer(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case GET_CURRENT_USER:
      return Object.assign({}, state, {
        currentEmail: action.currentEmail,
        currentUsername: action.currentUsername,
        isAdmin: action.isAdmin,
      });
    case EDIT_USER:
      return Object.assign({}, state, {});
    case GET_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
        usersGroups: action.usersGroups,
      });
    default:
      return state;
  }
}

export default editUserReducer;
