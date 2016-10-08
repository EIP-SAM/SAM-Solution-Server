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
import UsersFiltersReducer from './Filters/reducers';

import {
  USERS_GET_USERS,
  USERS_REMOVE_ALERT,
  USERS_REBOOT_ALERT,
  USERS_RESET_ALERT,
} from './constants';

const initialState = {
  users: [],
  alertMsg: '',
  typeAlert: '',
  displayAlert: false,
};

function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case USERS_RESET_ALERT:
      return Object.assign({}, state, {
        alertMsg: '',
        typeAlert: '',
        displayAlert: false,
      });
    case USERS_REMOVE_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been deleted',
        typeAlert: 'danger',
        displayAlert: true,
      });
    case USERS_REBOOT_ALERT:
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
  UsersFiltersReducer,
  UsersDeletionModalReducer,
});
