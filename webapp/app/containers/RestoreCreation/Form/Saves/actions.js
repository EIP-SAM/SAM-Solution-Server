//
// Saves form restore creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  RESTORE_CREATION_RESET_STATE_SAVES,
  RESTORE_CREATION_GET_HISTORY_SAVES_BY_USER_RESTORE,
  RESTORE_CREATION_SELECTED_SAVE,
  RESTORE_CREATION_SAVE_ERROR,
} from './constants';

export function resetStateSaves() {
  return {
    type: RESTORE_CREATION_RESET_STATE_SAVES,
  };
}

export function getHistorySavesByUser(allSaves) {
  return {
    type: RESTORE_CREATION_GET_HISTORY_SAVES_BY_USER_RESTORE,
    allSaves,
  };
}

export function selectSave(save) {
  return {
    type: RESTORE_CREATION_SELECTED_SAVE,
    save,
  };
}

export function saveErrorMsg(saveError) {
  return {
    type: RESTORE_CREATION_SAVE_ERROR,
    saveError,
  };
}
