//
// Edit group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import EditGroupFormGroupNameReducer from './GroupName/reducer';
import EditGroupFormGroupRightsSaveRestoreModeReducer from './GroupRights/SaveRestoreMode/reducer';
import EditGroupFormGroupRightsMigrationModeReducer from './GroupRights/MigrationMode/reducer';
import EditGroupFormGroupRightsSoftwareModeReducer from './GroupRights/SoftwareMode/reducer';
import EditGroupFormUsersReducer from './Users/reducers';
import {
  EDIT_GROUP_RESET_USER_ID,
  EDIT_GROUP_ID,
} from './constants';

const initialState = {
  groupId: 0,
};

function EditGroupFormReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_RESET_USER_ID:
      return Object.assign({}, state, {
        groupId: 0,
      });
    case EDIT_GROUP_ID:
      return Object.assign({}, state, {
        groupId: action.userId,
      });
    default:
      return state;
  }
}

export default combineReducers({
  EditGroupFormReducer,
  EditGroupFormGroupNameReducer,
  EditGroupFormGroupRightsSaveRestoreModeReducer,
  EditGroupFormGroupRightsMigrationModeReducer,
  EditGroupFormGroupRightsSoftwareModeReducer,
  EditGroupFormUsersReducer,
});
