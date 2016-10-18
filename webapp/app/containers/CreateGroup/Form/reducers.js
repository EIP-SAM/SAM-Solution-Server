//
// CreateGroup reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import CreateGroupFormGroupNameReducer from './GroupName/reducer';
import CreateGroupFormGroupRightsSaveRestoreModeReducer from './GroupRights/SaveRestoreMode/reducer';
import CreateGroupFormGroupRightsMigrationReducer from './GroupRights/MigrationMode/reducer';
import CreateGroupFormGroupRightsSoftwareModeReducer from './GroupRights/SoftwareMode/reducer';
import CreateGroupFormUsersReducer from './Users/reducer';

export default combineReducers({
  CreateGroupFormGroupNameReducer,
  CreateGroupFormGroupRightsSaveRestoreModeReducer,
  CreateGroupFormGroupRightsMigrationReducer,
  CreateGroupFormGroupRightsSoftwareModeReducer,
  CreateGroupFormUsersReducer,
});
