//
// Save & Restore mode group rights create group reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  CREATE_GROUP_MIGRATION_MODE_CHANGE,
} from './constants';

const initialState = {
  migrationMode: 0,
};

function CreateGroupFormGroupRightsMigrationReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_MIGRATION_MODE_CHANGE:
      return Object.assign({}, state, {
        migrationMode: action.migrationMode,
      });
    default:
      return state;
  }
}

export default CreateGroupFormGroupRightsMigrationReducer;
