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
  RESET_STATE_SAVES,
  GET_HISTORY_SAVES_BY_USER_RESTORE,
  SELECTED_SAVE,
  SAVE_ERROR,
} from './constants';

export function resetStateSaves() {
  return {
    type: RESET_STATE_SAVES,
  };
}

export function getHistorySavesByUser(allSaves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER_RESTORE,
    allSaves,
  };
}

export function selectSave(save) {
  return {
    type: SELECTED_SAVE,
    save,
  };
}

export function saveErrorMsg(saveError) {
  return {
    type: SAVE_ERROR,
    saveError,
  };
}
