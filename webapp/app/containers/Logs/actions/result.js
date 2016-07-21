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
import styleSort from '../styleSort.json';
import {
  GET_FILTERED_LOGS,
  CLEAR_LOGS,
  RESET_SORTS,
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
      .get('/log/multiple_criteria')
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

export function resetSorts() {
  return {
    type: RESET_SORTS,
    sorts: {
      dateStatus: styleSort.desc,
      levelStatus: styleSort.desc,
      loggerStatus: styleSort.desc,
      messageStatus: styleSort.desc,
    },
  };
}
