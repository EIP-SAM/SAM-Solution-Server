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

import request from 'utils/request';
import { browserHistory } from 'react-router';
const moment = require('moment');

import {
  RESET_STATE,
  GET_HISTORY_SAVES_BY_USER,
  USER,
  USER_ID,
  LIST_FILES,
  SELECTED_FILES,
  SELECTED_SAVE,
  SAVE_ERROR,
  FILES_ERROR,
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

export function filesErrorMsg(filesError) {
  return {
    type: FILES_ERROR,
    filesError,
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/history_save')
      .set({ username })
      .end((err, res) => {
        if (res.body.length > 0) {
          dispatch(getHistorySavesByUser(res.body));
          dispatch(selectSave({ value: res.body[0].id, text: moment(res.body[0].execDate).format('DD/MM/YYYY HH:mm') }));
          dispatch(setUserId(res.body[0].save_scheduled.userId));
          dispatch(selectFiles(res.body[0].save_scheduled.files));
        }
      });
  };
}

export function createRestoresRequest(state, redirect) {
  return function startAction(dispatch) {
    return request
      .post('/createRestore')
      .type('form')
      .send({
        userId: state.userId,
        files: state.selectedFiles.toString(),
      })
      .end(() => {
        if (redirect) {
          browserHistory.goBack();
          dispatch(resetState());
        }
      });
  };
}
