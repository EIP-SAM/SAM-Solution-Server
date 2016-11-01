//
// Sofwares by user reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SoftwaresByUserTableReducer from './Table/reducer';
import SoftwaresByUserAddSoftwareModalReducer from './Table/ModalAddSoftware/reducer';
import SoftwaresByUserUpdateSoftwareModalReducer from './Table/ModalUpdateSoftware/reducer';
import SoftwaresByUserDeleteSoftwareModalReducer from './Table/ModalDeleteSoftware/reducer';
import {
  SOFTWARES_BY_USER_GET_SOFTWARES,
  SOFTWARES_BY_USER_USERNAME,
  SOFTWARES_BY_USER_SOFT_NAME,
  SOFTWARES_BY_USER_ADDITION_ALERT,
  SOFTWARES_BY_USER_UPDATE_ALERT,
  SOFTWARES_BY_USER_DELETION_ALERT,
  SOFTWARES_BY_USER_RESET_ALERT,
} from './constants';

const initialState = {
  softwares: [],
  softName: '',
  username: '',
  alertMsg: '',
  typeAlert: '',
  displayAlert: false,
};

function SoftwaresByUserReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_GET_SOFTWARES:
      return Object.assign({}, state, {
        softwares: action.softwares,
      });
    case SOFTWARES_BY_USER_USERNAME:
      return Object.assign({}, state, {
        username: action.username,
      });
    case SOFTWARES_BY_USER_SOFT_NAME:
      return Object.assign({}, state, {
        softName: action.softName,
      });
    case SOFTWARES_BY_USER_RESET_ALERT:
      return Object.assign({}, state, {
        alertMsg: '',
        typeAlert: '',
        displayAlert: false,
      });
    case SOFTWARES_BY_USER_ADDITION_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been installed',
        typeAlert: 'info',
        displayAlert: true,
      });
    case SOFTWARES_BY_USER_UPDATE_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been updated',
        typeAlert: 'warning',
        displayAlert: true,
      });
    case SOFTWARES_BY_USER_DELETION_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been deleted',
        typeAlert: 'danger',
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
  SoftwaresByUserReducer,
  SoftwaresByUserTableReducer,
  SoftwaresByUserAddSoftwareModalReducer,
  SoftwaresByUserUpdateSoftwareModalReducer,
  SoftwaresByUserDeleteSoftwareModalReducer,
});
