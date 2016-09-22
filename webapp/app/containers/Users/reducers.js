//
// Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import UsersDeletionModalReducer from './Table/ModalDeletionUser/reducer';
import {
  GET_USERS,
  REMOVE_ALERT,
  REBOOT_ALERT,
  RESET_ALERT,
} from './constants';

const initialState = {
  users: [],
  alertMsg: '',
  typeAlert: '',
  displayAlert: false,
};

function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case RESET_ALERT:
      return Object.assign({}, state, {
        alertMsg: '',
        typeAlert: '',
        displayAlert: false,
      });
    case REMOVE_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been deleted',
        typeAlert: 'danger',
        displayAlert: true,
      });
    case REBOOT_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been reboot',
        typeAlert: 'info',
        displayAlert: true,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of users page
//
export default combineReducers({
  UsersReducer,
  UsersDeletionModalReducer,
});
