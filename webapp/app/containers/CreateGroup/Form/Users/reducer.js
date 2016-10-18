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
import CreateUserFormUsersAllUsersReducer from './AllUsers/reducer';

export default combineReducers({
  CreateUserFormUsersAllUsersReducer,
});
