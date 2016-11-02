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
import NotificationsFormAllUsersReducer from './AllUsers/reducers';
import NotificationsFormSelectedUsersReducer from './SelectedUsers/reducers';

export default combineReducers({
  NotificationsFormAllUsersReducer,
  NotificationsFormSelectedUsersReducer,
});
