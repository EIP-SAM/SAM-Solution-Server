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

const request = require('superagent');

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
      .get('http://localhost:8080/historyRestore')
      .set({ username })
      .type('form')
      .send({ username })
      .end((err, res) => {
        dispatch(getHistoryRestoresByUser(res.body));
    });
  };
}
