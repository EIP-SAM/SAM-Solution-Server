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
import SoftwaresByUserSearchbarReducer from './Searchbar/reducer';
import SoftwaresByUserButtonsReducers from './Buttons/reducers';
import SoftwaresByUserTableReducers from './Table/reducers';

import {
  SOFTWARES_BY_USER_GET_SOFTWARES,
  SOFTWARES_BY_USER_USERNAME,
  SOFTWARES_BY_USER_ALERT,
  SOFTWARES_BY_USER_RESET_ALERT,
} from './constants';

const initialState = {
  softwares: [],
  username: '',
  alerts: [], // {typeAlert, alertMsg, softName}
  displayAlerts: false,
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
    case SOFTWARES_BY_USER_RESET_ALERT:
      return Object.assign({}, state, {
        alerts: [],
        displayAlert: false,
      });
    case SOFTWARES_BY_USER_ALERT:
      return Object.assign({}, state, {
        alerts: [
          ...state.alerts,
          action.alert,
        ],
        displayAlert: true,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of software page
//
export default combineReducers({
  SoftwaresByUserReducer,
  SoftwaresByUserSearchbarReducer,
  SoftwaresByUserButtonsReducers,
  SoftwaresByUserTableReducers,
});
