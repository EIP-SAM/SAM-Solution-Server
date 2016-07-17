//
// EditGroup reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  EDIT_GROUP,
  GET_GROUP,
  SAVE_DATA,
} from './constants';

function editGroupReducer(state = null, action) {
  switch (action.type) {
    case EDIT_GROUP:
      return Object.assign({}, state, {});
    case GET_GROUP:
      return Object.assign({}, state, {
        displayedGroupname: action.displayedGroupname,
        displayedSaveAndRestoreMode: action.displayedSaveAndRestoreMode,
        displayedMigrationMode: action.displayedMigrationMode,
        displayedSoftwarePackagesMode: action.displayedSoftwarePackagesMode,
      });
    case SAVE_DATA:
      return Object.assign({}, state, {
        groupname: action.groupname,
        saveAndRestoreMode: action.saveAndRestoreMode,
        migrationMode: action.migrationMode,
        softwarePackages: action.softwarePackagesMode,
      });
    default:
      return state;
  }
}

export default editGroupReducer;
