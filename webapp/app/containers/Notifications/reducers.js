//
// Notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import NotificationsFormReducer from './Form/reducers';

import {
  NOTIFICATIONS_ALERT,
  NOTIFICATIONS_RESET_ALERT,
} from './constants';

const initialState = {
  alertMsg: '',
  typeAlert: '',
  displayAlert: false,
};

function NotificationsReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_ALERT:
      return Object.assign({}, state, {
        alertMsg: '',
        typeAlert: '',
        displayAlert: false,
      });
    case NOTIFICATIONS_ALERT:
      return Object.assign({}, state, {
        alertMsg: 'has been deleted',
        typeAlert: 'info',
        displayAlert: true,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of NOTIFICATIONS page
//
export default combineReducers({
  NotificationsReducer,
  NotificationsFormReducer,
});
