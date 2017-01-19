//
// Restore history actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import RESTORE_HISTORY_GET_HISTORY_RESTORES_BY_USER from './constants';

export function getHistoryRestoresByUser(restores) {
  return {
    type: RESTORE_HISTORY_GET_HISTORY_RESTORES_BY_USER,
    restores,
  };
}

export function getHistoryRestoresByUserRequest(username, limit) {
  return function returnGetHistoryRestoresByUserRequest(dispatch) {
    return request
      .get('/api/logged-in/history_restore')
      .query({ username, limit })
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(getHistoryRestoresByUser(res.body));
      });
  };
}
