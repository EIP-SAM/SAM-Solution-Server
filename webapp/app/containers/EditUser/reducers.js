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
  SAVE_DATA,
  GET_USER,
  GET_CURRENT_USER,
  EDIT_USER,
} from './constants';

function editUserReducer(state = null, action) {
  switch (action.type) {
    case SAVE_DATA:
      return Object.assign({}, state, {
        username: action.username,
        email: action.email,
        password: action.password,
        confirmation: action.confirmation,
      });
      case GET_USER:
        return Object.assign({}, state, {
          displayedUsername: action.displayedUsername,
          displayedEmail: action.displayedEmail,

        });
      case GET_CURRENT_USER:
        return Object.assign({}, state, {
          username: action.username,
          email: action.email,
          password: action.password,
          confirmation: action.confirmation,
          // isAdmin: action.isAdmin,
        });
    case EDIT_USER:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export default editUserReducer;
