//
// Users form save creation actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//


import {
  SAVE_CREATION_RESET_STATE_DATE,
  SAVE_CREATION_DATE,
  SAVE_CREATION_DATE_ERROR,
  SAVE_CREATION_DATE_DISABLED,
} from './constants';

export function resetStateDate() {
  return {
    type: SAVE_CREATION_RESET_STATE_DATE,
  };
}

export function dateDisabled(isDateDisabled) {
  return {
    type: SAVE_CREATION_DATE_DISABLED,
    isDateDisabled,
  };
}

export function dateSave(date) {
  return {
    type: SAVE_CREATION_DATE,
    date,
  };
}

export function dateErrorMsg(dateError) {
  return {
    type: SAVE_CREATION_DATE_ERROR,
    dateError,
  };
}
