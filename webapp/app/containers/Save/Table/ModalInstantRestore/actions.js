//
// Instant restore modal save page  Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import {
  SAVE_SHOW_INSTANT_RESTORE_MODAL,
  SAVE_INSTANT_RESTORE,
  SAVE_RESET_RESTORE_STATE,
} from './constants';

export function resetRestoreState() {
  return {
    type: SAVE_RESET_RESTORE_STATE,
  };
}

export function showInstantRestoreModal() {
  return {
    type: SAVE_SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: SAVE_SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: false,
  };
}

export function instantRestore(userId, files, saveId) {
  return {
    type: SAVE_INSTANT_RESTORE,
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
        request.redirectHandling(res.statusCode);
        dispatch(resetRestoreState());
      });
  };
}
