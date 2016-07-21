//
// EditGroup reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_GROUP,
  GET_GROUP,
  GET_USERS,
} from './constants';

function editGroupReducer(state = null, action) {
  switch (action.type) {
    case EDIT_GROUP:
      return Object.assign({}, state, {});
    case GET_GROUP:
      return Object.assign({}, state, {
        group: action.group,
      });
      case GET_USERS:
        return Object.assign({}, state, {
          users: action.users,
          usersGroups: action.usersGroups,
        });
    default:
      return state;
  }
}

export default editGroupReducer;
