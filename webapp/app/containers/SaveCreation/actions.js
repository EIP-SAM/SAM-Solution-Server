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
  SHOW_ADD_FILE_MODAL,
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
} from './constants';

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

//
// Get username of users list in state.
// Create save
//
export function createSave(state) {
  const usersId = [];
  for (const user of state.users) {
    usersId.push(user.value);
  }

  return function createSaveRequest() {
    return request
      .post('http://localhost:8080/createSave')
      .type('form')
      .send({
        usersId,
        date: state.date,
        time: state.time,
        frequency: state.frequency,
        files: state.files,
      })
      .end(() => {
        browserHistory.goBack();
      });
  };
}
