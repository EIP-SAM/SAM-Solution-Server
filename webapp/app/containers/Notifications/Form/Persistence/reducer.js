//
// Persistence form notifications reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  NOTIFICATIONS_PERSISTENCE_CHANGE,
  NOTIFICATIONS_RESET_STATE_PERSISTENCE,
} from './constants';

const initialState = {
  persistence: false,
};

function NotificationsFormPersistenceReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_RESET_STATE_PERSISTENCE:
      return Object.assign({}, initialState, {});
    case NOTIFICATIONS_PERSISTENCE_CHANGE:
      return Object.assign({}, state, {
        persistence: action.persistence,
      });
    default:
      return state;
  }
}

export default NotificationsFormPersistenceReducer;
