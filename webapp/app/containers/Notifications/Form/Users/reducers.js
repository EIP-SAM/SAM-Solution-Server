//
// Notifications Form Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import NotificationsFormAllUsersReducer from './AllUsers/reducer';
import NotificationsFormSelectedUsersReducer from './SelectedUsers/reducer';

export default combineReducers({
  NotificationsFormAllUsersReducer,
  NotificationsFormSelectedUsersReducer,
});
