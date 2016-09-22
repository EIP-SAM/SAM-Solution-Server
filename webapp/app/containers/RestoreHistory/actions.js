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
import { browserHistory } from 'react-router';

import {
  GET_HISTORY_RESTORES_BY_USER,
} from './constants';

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
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getHistoryRestoresByUser(res.body));
      });
  };
}
