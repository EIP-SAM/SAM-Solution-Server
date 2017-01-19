//
// Logs Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import {
  LOGS_GET_FILTERED_LOGS,
  LOGS_CLEAR_LOGS,
  LOGS_SET_SORTS,
  LOGS_REQUEST_IS_LOADING,
} from '../constants/result';

export function getLogs(type, logs) {
  return {
    type,
    logs,
  };
}

export function clearLogs() {
  return {
    type: LOGS_CLEAR_LOGS,
    logs: { error: false, data: [] },
  };
}

export function requestIsLoading(isLoading) {
  return {
    type: LOGS_REQUEST_IS_LOADING,
    isLoading,
  };
}

export function getFilteredLogs(filters) {
  return function startAction(dispatch) {
    dispatch(requestIsLoading(true));
    dispatch(clearLogs());
    return request
      .get('/api/logged-in/admin/log/multiple_criteria')
      .query({ criteria: filters })
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(requestIsLoading(false));
        if (err || res.body.error) {
          dispatch(getLogs(LOGS_GET_FILTERED_LOGS, { error: true, data: [] }));
        } else {
          dispatch(getLogs(LOGS_GET_FILTERED_LOGS, res.body));
        }
      });
  };
}

export function setSorts(sorts) {
  return {
    type: LOGS_SET_SORTS,
    sorts,
  };
}
