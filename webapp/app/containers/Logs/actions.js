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

import request from 'superagent';

import {
  GET_ALL_LOGS,
} from './constants';

export function getLogs(logs) {
  return {
    type: GET_ALL_LOGS,
    logs,
  };
}

export function getAllLogsRequest() {
  return function startAction(dispatch) {
    return request
      .get('http://localhost:8080/log')
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured');
        } else {
          dispatch(getLogs(res.body));
        }
      });
  };
}
