//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

const request = require('superagent');
import { browserHistory } from 'react-router';

import {
  RESET_STATE,
  GET_HISTORY_SAVES_BY_USER,
  USER,
  USER_ID,
  LIST_FILES,
  SELECTED_FILES,
  LIST_SAVES,
} from './constants';

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function getHistorySavesByUser(allSaves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    allSaves,
  };
}

export function nameUser(user) {
  return {
    type: USER,
    user,
  };
}

export function setUserId(userId) {
  return {
    type: USER_ID,
    userId,
  };
}

export function listFiles(files) {
  return {
    type: LIST_FILES,
    files,
  };
}

export function selectFiles(selectedFiles) {
  return {
    type: SELECTED_FILES,
    selectedFiles,
  };
}

export function listSaves(saves) {
  return {
    type: LIST_SAVES,
    saves,
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('http://localhost:8080/history_save')
      .set({ username })
      .end((err, res) => {
        dispatch(getHistorySavesByUser(res.body));
        dispatch(setUserId(res.body[0].save_scheduled.userId));
      });
  };
}

export function createRestoresRequest(state, redirect) {
  return function startAction() {
    return request
      .post('http://localhost:8080/createRestore')
      .type('form')
      .send({
        userId: state.userId,
        files: state.selectedFiles.toString(),
      })
      .end(() => {
        if (redirect) {
          browserHistory.goBack();
        }
      });
  };
}
