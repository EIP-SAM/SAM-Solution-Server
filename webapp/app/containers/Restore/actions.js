//
// Restore actions
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
  GET_RESTORES,
} from './constants';

export function getRestores(restores) {
  return {
    type: GET_RESTORES,
    restores,
  };
}

export function getRestoresRequest() {
  return function returnGetRestoresRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/restore')
      .end((err, res) => {
        dispatch(getRestores(res.body));
      });
  };
}
