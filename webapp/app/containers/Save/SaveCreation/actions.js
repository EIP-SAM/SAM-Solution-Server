//
// Save Creation Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  RESET_STATE,
  SHOW_ADD_FILE_MODAL,
  CAN_ADD_FILE,
  INPUT_FILE_CHANGE,
  LIST_USERS_ERROR,
  DATE_ERROR,
  TIME_ERROR,
  FREQUENCY_ERROR,
  ADD_FILE_ERROR,
} from './constants';

export function resetStateSaveCreation() {
  return {
    type: RESET_STATE,
  };
}

export function showModal() {
  return {
    type: SHOW_ADD_FILE_MODAL,
    showModal: true,
  };
}

export function hideModal() {
  return {
    type: SHOW_ADD_FILE_MODAL,
    showModal: false,
  };
}

export function displayAddFile(canAddFile) {
  return {
    type: CAN_ADD_FILE,
    canAddFile,
  };
}

export function inputFileChange(file) {
  return {
    type: INPUT_FILE_CHANGE,
    inputFileChange: file,
  };
}

export function userErrorMsg(userError) {
  return {
    type: LIST_USERS_ERROR,
    userError,
  };
}

export function dateErrorMsg(dateError) {
  return {
    type: DATE_ERROR,
    dateError,
  };
}

export function timeErrorMsg(timeError) {
  return {
    type: TIME_ERROR,
    timeError,
  };
}

export function frequencyErrorMsg(frequencyError) {
  return {
    type: FREQUENCY_ERROR,
    frequencyError,
  };
}

export function fileErrorMsg(fileError) {
  return {
    type: ADD_FILE_ERROR,
    fileError,
  };
}
