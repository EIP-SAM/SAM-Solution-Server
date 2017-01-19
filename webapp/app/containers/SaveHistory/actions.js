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
import SAVE_HISTORY_GET_HISTORY_SAVES_BY_USER from './constants';

export function getHistorySavesByUser(saves) {
  return {
    type: SAVE_HISTORY_GET_HISTORY_SAVES_BY_USER,
    saves,
  };
}

export function getHistorySavesByUserRequest(username, limit) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/api/logged-in/history_save')
      .query({ username, limit })
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        let saves = [];
        if (res.body.length) {
          saves = res.body;
        }
        dispatch(getHistorySavesByUser(saves));
      });
  };
}
