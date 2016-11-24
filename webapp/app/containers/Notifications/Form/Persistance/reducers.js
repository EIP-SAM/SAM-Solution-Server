//
// Persistance form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_PERSISTANCE_CHANGE,
  NOTIFICATIONS_RESET_STATE_PERSISTANCE,
} from './constants';

const initialState = {
  persistance: false,
};

function NotificationsFormPersistanceReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_PERSISTANCE:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_PERSISTANCE_CHANGE:
      return Object.assign({}, state, {
        persistance: action.persistance,
      });
    default:
      return state;
  }
}

export default NotificationsFormPersistanceReducer;
