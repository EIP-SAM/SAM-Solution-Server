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

import request from 'utils/request';
import { browserHistory } from 'react-router';
import {
  GET_HISTORY_SAVES_BY_USER,
} from './constants';

export function getHistorySavesByUser(saves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    saves,
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/api/logged-in/history_save')
      .query({ username })
      .end((err, res) => {

        if (err && res.statusCode == 401) {
          browserHistory.push('/login');
        }

        let saves = [];
        if (res.body.length) {
          saves = res.body;
        }
        dispatch(getHistorySavesByUser(saves));
      });
  };
}
