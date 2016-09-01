//
// Save Module Actions
//

import { browserHistory } from 'react-router';
import request from 'utils/request';

import {
  RESET_STATE_SAVING,
  LIST_USERS,
  DATE,
  TIME,
  FREQUENCY,
  ADD_FILE,
  ADD_ALL_FILES,
} from './constants';

export function resetStateSaving() {
  return {
    type: RESET_STATE_SAVING,
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
// Syntaxe state.users : { value: user.id }
// Check if all elements send through the request are completed
//
export function createSave(redirect, users, date, time, frequency, files) {
  const usersId = [];
  for (const user of users) {
    usersId.push(user.value);
  }

  return function createSaveRequest(dispatch) {
    return request
      .post('/api/logged-in/create_save')
      .type('form')
      .send({
        usersId,
        date,
        time,
        frequency,
        files,
      })
      .end(() => {
        if (redirect) {
          browserHistory.goBack();
        }
        dispatch(resetStateSaving());
      });
  };
}
