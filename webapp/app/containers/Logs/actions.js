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

import fetch from 'isomorphic-fetch';

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
  return function (dispatch) {
    return fetch('http://localhost:8080/log')
        .then(response => response.json())
        .then(json =>
          dispatch(getLogs(json))
        );
  };
}
