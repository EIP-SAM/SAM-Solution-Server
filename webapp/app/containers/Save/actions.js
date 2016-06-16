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
  GET_SAVES,
} from './constants';

export function getSaves(saves) {
  return {
    type: GET_SAVES,
    saves,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return fetch('http://localhost:8080/save')
        .then(response => response.json())
        .then(json =>
          dispatch(getSaves(json))
        );
  };
}
