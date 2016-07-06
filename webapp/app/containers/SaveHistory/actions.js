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

const request = require('superagent');

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
      .get('http://localhost:8080/historySave')
      .set({ username })
      .end((err, res) => {
        dispatch(getHistorySavesByUser(res.body));
      });
  };
}
