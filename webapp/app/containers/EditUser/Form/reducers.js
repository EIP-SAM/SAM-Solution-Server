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
  EDIT_USER_ID,
  EDIT_USER_RESET_USER_ID,
} from './constants';

const initialState = {
  userId: 0,
};

function EditUserFormReducer(state = initialState, action) {
  switch (action.type) {
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
