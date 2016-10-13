//
// Save & Restore mode group rights edit group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_GROUP_MIGRATION_MODE_CHANGE,
} from './constants';

const initialState = {
  migrationMode: 0,
};

function EditGroupFormGroupRightsMigrationModeReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP_MIGRATION_MODE_CHANGE:
      return Object.assign({}, state, {
        migrationMode: action.migrationMode,
      });
    default:
      return state;
  }
}

export default EditGroupFormGroupRightsMigrationModeReducer;
