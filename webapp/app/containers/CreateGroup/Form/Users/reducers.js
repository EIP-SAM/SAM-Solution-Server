//
// CreateGroup Form Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import CreateGroupFormUsersAllUsersReducer from './AllUsers/reducer';
import CreateGroupFormUsersSelectedUsersReducer from './SelectedUsers/reducer';

export default combineReducers({
  CreateGroupFormUsersAllUsersReducer,
  CreateGroupFormUsersSelectedUsersReducer,
});
