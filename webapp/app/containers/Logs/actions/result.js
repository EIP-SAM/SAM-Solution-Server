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
  GET_FILTERED_LOGS,
  CLEAR_LOGS,
} from '../constants/result';

export function getLogs(type, logs) {
  return {
    type,
    logs,
  };
}

export function clearLogs() {
  return {
    type: CLEAR_LOGS,
    logs: { error: false, data: [] },
  };
}

export function getFilteredLogs(filters) {
  return function startAction(dispatch) {
    return request
      .get('http://localhost:8080/log/multiple_criteria')
      .query({ criteria: filters })
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured');
        } else {
          dispatch(getLogs(GET_FILTERED_LOGS, res.body));
        }
      });
  };
}
