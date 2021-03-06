//
// Save & Restore mode group rights edit group actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import EDIT_GROUP_SAVE_RESTORE_MODE_CHANGE from './constants';

export default function saveRestoreModeChange(saveRestoreMode) {
  return {
    type: EDIT_GROUP_SAVE_RESTORE_MODE_CHANGE,
    saveRestoreMode,
  };
}
