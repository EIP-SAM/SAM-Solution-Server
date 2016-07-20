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

import { browserHistory } from 'react-router';
const request = require('superagent');

import {
  RESET_STATE,
  SHOW_ADD_FILE_MODAL,
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
  CAN_ADD_FILE,
  INPUT_FILE_CHANGE,
  LIST_USERS_ERROR,
  DATE_ERROR,
  TIME_ERROR,
  FREQUENCY_ERROR,
  ADD_FILE_ERROR,
} from './constants';

export function resetState() {
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

export function listUsers(users) {
  return {
    type: LIST_USERS,
    users,
  };
}

export function dateSave(date) {
  return {
    type: DATE,
    date,
  };
}

export function timeSave(time) {
  return {
    type: TIME,
    time,
  };
}

export function frequencySave(frequency) {
  return {
    type: FREQUENCY,
    frequency,
  };
}

export function addFile(file) {
  return {
    type: ADD_FILE,
    file,
  };
}

export function addAllFiles(files) {
  return {
    type: ADD_ALL_FILES,
    files,
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

//
// Get username of users list in state.
// Create save
// Syntaxe state.users : { value: user.id }
// Check if all elements send through the request are completed
//
export function createSave(state, redirect) {
  const usersId = [];
  for (const user of state.users) {
    usersId.push(user.value);
  }

  return function createSaveRequest(dispatch) {
    return request
      .post('http://localhost:8080/create_save')
      .type('form')
      .send({
        usersId,
        date: state.date,
        time: state.time,
        frequency: state.frequency,
        files: state.files,
      })
      .end(() => {
        if (redirect) {
          browserHistory.goBack();
        }
        dispatch(resetState());
      });
  };
}
