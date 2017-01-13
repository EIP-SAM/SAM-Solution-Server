//
// Notifications Form Groups reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import NotificationsFormAllGroupsReducer from './AllGroups/reducer';
import NotificationsFormSelectedGroupsReducer from './SelectedGroups/reducer';

export default combineReducers({
  NotificationsFormAllGroupsReducer,
  NotificationsFormSelectedGroupsReducer,
});
