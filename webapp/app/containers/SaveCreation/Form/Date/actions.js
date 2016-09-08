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
  RESET_STATE_DATE,
  DATE,
  DATE_ERROR,
} from './constants';

export function resetStateDate() {
  return {
    type: RESET_STATE_DATE,
  };
}

export function dateSave(date) {
  return {
    type: DATE,
    date,
  };
}

export function dateErrorMsg(dateError) {
  return {
    type: DATE_ERROR,
    dateError,
  };
}
