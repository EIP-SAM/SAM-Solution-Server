//
// Instant restore modal restore history actions
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
import { resetStateForm } from 'containers/RestoreCreation/Form/actions';
import { getHistoryRestoresByUserRequest } from 'containers/RestoreHistory/actions';
import RESTORE_HISTORY_SHOW_INSTANT_RESTORE_MODAL from './constants';

export function showInstantRestoreModal() {
  return {
    type: RESTORE_HISTORY_SHOW_INSTANT_RESTORE_MODAL,
    showModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: RESTORE_HISTORY_SHOW_INSTANT_RESTORE_MODAL,
    showModal: false,
  };
}

export function createRestoreActionRestoreHistory(username, userId, selectedFiles, saveId) {
  return function createRestoreRequest(dispatch) {
    return request
      .post('/api/logged-in/create_restore')
      .type('form')
      .send({
        userId,
        saveId,
        files: selectedFiles.toString(),
      })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(resetStateForm());
        dispatch(getHistoryRestoresByUserRequest(username));
      });
  };
}
