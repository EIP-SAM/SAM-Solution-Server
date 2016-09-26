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
  EDIT_USER,
  GET_GROUPS,
  GET_CURRENT_USER,
} from './constants';

function editUserReducer(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case EDIT_USER:
      return Object.assign({}, state, {});
    case GET_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
        usersGroups: action.usersGroups,
      });
    case GET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
      });
    default:
      return state;
  }
}

export default editUserReducer;
