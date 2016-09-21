//
// Instant restore modal save history page Actions
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
import {
  SHOW_INSTANT_RESTORE_MODAL,
  INSTANT_RESTORE,
  RESET_RESTORE_STATE,
} from './constants';

export function resetRestoreState() {
  return {
    type: RESET_RESTORE_STATE,
  };
}

export function showInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: false,
  };
}

export function instantRestore(userId, files, saveId) {
  return {
    type: INSTANT_RESTORE,
    userId,
    saveId,
    files,
  };
}

export function createRestoreRequest(userId, files, saveId) {
  return function returnCreateRestoreRequest(dispatch) {
    return request
      .post('/api/logged-in/create_restore')
      .type('form')
      .send({
        userId,
        saveId,
        files,
      })
      .end((err, res) => {

        if (err && res.statusCode == 401) {
          browserHistory.push('/login');
        }

        dispatch(resetRestoreState());
      });
  };
}
