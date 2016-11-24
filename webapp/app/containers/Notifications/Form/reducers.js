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
import NotificationsFormDescriptionReducer from './Description/reducer';
import NotificationsFormPersistanceReducer from './Persistance/reducer';
import NotificationsFormTitleReducer from './Title/reducer';
import NotificationsFormUsersReducer from './Users/reducers';

export default combineReducers({
  NotificationsFormDescriptionReducer,
  NotificationsFormTitleReducer,
  NotificationsFormPersistanceReducer,
  NotificationsFormUsersReducer,
});