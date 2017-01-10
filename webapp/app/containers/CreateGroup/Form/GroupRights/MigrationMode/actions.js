//
// Migration mode group rights create group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import CREATE_GROUP_MIGRATION_MODE_CHANGE from './constants';

export default function migrationModeChange(migrationMode) {
  return {
    type: CREATE_GROUP_MIGRATION_MODE_CHANGE,
    migrationMode,
  };
}
