//
// Groups reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import GroupsDeletionModalReducer from './Table/ModalDeletionGroup/reducer';
import {
  GROUPS_GET_GROUPS,
  GROUPS_REMOVE_ALERT,
  GROUPS_RESET_ALERT,
} from './constants';

const initialState = {
  groups: [],
  alertMsg: '',
  typeAlert: '',
  displayAlert: false,
};

function GroupsReducer(state = initialState, action) {
  switch (action.type) {
    case GROUPS_GET_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case GROUPS_RESET_ALERT:
      return Object.assign({}, state, {
        alertMsg: '',
        typeAlert: '',
        displayAlert: false,
      });
    case GROUPS_REMOVE_ALERT:
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
// Combine all reducers of groups page
//
export default combineReducers({
  GroupsReducer,
  GroupsDeletionModalReducer,
});
