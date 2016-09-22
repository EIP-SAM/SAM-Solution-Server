//
// Instant save delation modal save history page Actions
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
import { getHistorySavesByUserRequest } from 'containers/SaveHistory/actions';
import {
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
  DELETE_SCHEDULED_SAVE_INFO,
} from './constants';

export function showDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: true,
  };
}

export function hideDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: false,
  };
}

export function deleteScheduledSaveInfo(saveId, saveScheduledId, username) {
  return {
    type: DELETE_SCHEDULED_SAVE_INFO,
    saveId,
    saveScheduledId,
    username,
  };
}

export function cancelSave(saveId, saveScheduledId, username) {
  return function returnCancelSave(dispatch) {
    return request
    .post('/api/logged-in/cancel_save')
    .type('form')
    .send({
      saveScheduledId,
      saveId,
    })
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }

      dispatch(getHistorySavesByUserRequest(username));
    });
  };
}
