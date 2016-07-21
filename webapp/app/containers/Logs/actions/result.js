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
import {
  GET_FILTERED_LOGS,
  CLEAR_LOGS,
  SET_SORTS,
  REQUEST_IS_LOADING,
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

export function requestIsLoading(isLoading) {
  return {
    type: REQUEST_IS_LOADING,
    isLoading,
  };
}

export function getFilteredLogs(filters) {
  return function startAction(dispatch) {
    dispatch(requestIsLoading(true));
    dispatch(clearLogs());
    return request
      .get('/log/multiple_criteria')
      .query({ criteria: filters })
      .end((err, res) => {
        dispatch(requestIsLoading(false));
        if (err || res.body.error) {
          dispatch(getLogs(GET_FILTERED_LOGS, { error: true, data: [] }));
        } else {
          dispatch(getLogs(GET_FILTERED_LOGS, res.body));
        }
      });
  };
}

export function setSorts(sorts) {
  return {
    type: SET_SORTS,
    sorts,
  };
}
