//
// Save History Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import { browserHistory } from 'react-router';
import { getUsers } from 'containers/Save/actions';
const request = require('superagent');

import {
  GET_HISTORY_SAVES_BY_USER,
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
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

export function getHistorySavesByUser(saves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
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
        const users = [{ id: res.body[0].save_scheduled.user.id, name: res.body[0].save_scheduled.user.name }];
        dispatch(getUsers(users));
      });
  };
}

export function cancelSave(saveId, saveScheduledId, username) {
  return function returnCancelSave(dispatch) {
    return request
    .post('http://localhost:8080/cancel_save')
    .type('form')
    .send({
      saveScheduledId,
      saveId,
    })
    .end(() => {
      // dispatch(getHistorySavesByUser(username));
    });
  };
}
