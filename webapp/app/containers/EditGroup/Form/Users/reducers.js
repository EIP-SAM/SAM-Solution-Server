//
// Edit group Form Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import EditGroupFormUsersAllUsersReducer from './AllUsers/reducer';
import EditGroupFormUsersSelectedUsersReducer from './SelectedUsers/reducer';

export default combineReducers({
  EditGroupFormUsersAllUsersReducer,
  EditGroupFormUsersSelectedUsersReducer,
});
