//
// Migration mode group rights edit group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import EDIT_GROUP_MIGRATION_MODE_CHANGE from './constants';

export function migrationModeChange(migrationMode) {
  return {
    type: EDIT_GROUP_MIGRATION_MODE_CHANGE,
    migrationMode,
  };
}
