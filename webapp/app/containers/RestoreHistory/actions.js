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

import {
  GET_HISTORY_RESTORES_BY_USER,
  SHOW_INSTANT_RESTORE_MODAL,
} from './constants';

export function showInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showModal: false,
  };
}

export function getHistoryRestoresByUser(restores) {
  return {
    type: GET_HISTORY_RESTORES_BY_USER,
    restores,
  };
}

export function getHistoryRestoresByUserRequest(username) {
  return function returnGetHistoryRestoresByUserRequest(dispatch) {
    return request
      .get('/api/logged-in/history_restore')
      .query({ username })
      .end((err, res) => {
        dispatch(getHistoryRestoresByUser(res.body));
      });
  };
}
