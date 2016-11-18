//
// Sofwares by user table reducers
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SoftwaresByUserAddSoftwareModalReducer from './ModalAddSoftware/reducer';
import SoftwaresByUserUpdateSoftwareModalReducer from './ModalUpdateSoftware/reducer';
import SoftwaresByUserDeleteSoftwareModalReducer from './ModalDeleteSoftware/reducer';

import {
  SOFTWARES_BY_USER_RESET_STATE_TABLE,
  SOFTWARES_BY_USER_SOFT_NAME,
  SOFTWARES_BY_USER_SELECTED_SOFTWARES,
  SOFTWARES_BY_USER_ALL_CHECKED,
} from './constants';

const initialState = {
  softName: '',
  selectedSoftwares: [],
  allChecked: false,
};

function SoftwaresByUserTableReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARES_BY_USER_RESET_STATE_TABLE:
      return Object.assign({}, initialState, {});
    case SOFTWARES_BY_USER_SELECTED_SOFTWARES:
      return Object.assign({}, state, {
        selectedSoftwares: action.selectedSoftwares,
      });
    case SOFTWARES_BY_USER_ALL_CHECKED:
      return Object.assign({}, state, {
        allChecked: action.allChecked,
      });
    case SOFTWARES_BY_USER_SOFT_NAME:
      return Object.assign({}, state, {
        softName: action.softName,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of software page
//
export default combineReducers({
  SoftwaresByUserTableReducer,
  SoftwaresByUserAddSoftwareModalReducer,
  SoftwaresByUserUpdateSoftwareModalReducer,
  SoftwaresByUserDeleteSoftwareModalReducer,
});
