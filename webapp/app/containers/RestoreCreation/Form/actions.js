//
// Restore creation actions
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
  setUserId,
  nameUser,
  resetStateUsers,
} from './Users/actions';

import {
  selectFiles,
  resetStateFiles,
} from './Files/actions';

import {
  resetStateSaves,
  getHistorySavesByUser,
  selectSave,
} from './Saves/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateUsers());
    dispatch(resetStateSaves());
    dispatch(resetStateFiles());
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/api/logged-in/history_succeeded_save')
      .query({ username })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(nameUser(username));
        if (res.body.length > 0) {
          dispatch(getHistorySavesByUser(res.body));
          dispatch(selectSave({ value: res.body[0].id, text: moment(res.body[0].execDate).format('DD/MM/YYYY HH:mm') }));
          dispatch(setUserId(res.body[0].save_scheduled.userId));
          const files = res.body[0].save_scheduled.files.split(',');
          dispatch(selectFiles(files));
        }
      });
  };
}

export function createRestoresRequest(userId, files, saveId, redirect) {
  return function startAction(dispatch) {
    return request
      .post('/api/logged-in/create_restore')
      .type('form')
      .send({
        userId,
        saveId,
        files: files.toString(),
      })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        if (redirect) {
          browserHistory.goBack();
        }
        dispatch(resetStateForm());
      });
  };
}
