//
// Edit user form reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import EditUserFormUsernameReducer from './Username/reducer';
import EditUserFormEmailReducer from './Email/reducer';
import EditUserFormPasswordReducer from './Password/reducer';
import EditUserFormPasswordConfirmationReducer from './PasswordConfirmation/reducer';
import EditUserFormGroupsReducer from './Groups/reducer';
import {
  GET_USER,
  EDIT_USER,
  GET_GROUPS,
  GET_CURRENT_USER,
  EDIT_USER_ID,
  EDIT_USER_RESET_USER_ID,
} from './constants';

const initialState = {
  userId: 0,
};

function EditUserFormReducer(state = initialState, action) {
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
    case EDIT_USER_RESET_USER_ID:
      return Object.assign({}, state, {
        userId: 0,
      });
    case EDIT_USER_ID:
      return Object.assign({}, state, {
        userId: action.userId,
      });
    default:
      return state;
  }
}

export default combineReducers({
  EditUserFormReducer,
  EditUserFormUsernameReducer,
  EditUserFormEmailReducer,
  EditUserFormPasswordReducer,
  EditUserFormPasswordConfirmationReducer,
  EditUserFormGroupsReducer,
});
