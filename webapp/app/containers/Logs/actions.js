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
  GET_LIMIT_LOGS,
  CLEAR_LOGS,
} from './constants';

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

export function getAllLogsRequest() {
  return function startAction(dispatch) {
    return request
      .get('http://localhost:8080/log/')
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured');
        } else {
          dispatch(getLogs(GET_ALL_LOGS, res.body));
        }
      });
  };
}

export function getLimitLogsRequest() {
  return function startAction(dispatch) {
    return request
      .post('http://localhost:8080/log/limited')
      .send('limit=5')
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured');
        } else {
          dispatch(getLogs(GET_LIMIT_LOGS, res.body));
        }
      });
  };
}
