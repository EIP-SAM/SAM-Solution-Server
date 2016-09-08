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
  GET_SAVES,
  GET_USERS,
} from './constants';

export function getSaves(saves) {
  return {
    type: GET_SAVES,
    saves,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/save')
      .end((err, res) => {
        dispatch(getSaves(res.body));
        const users = [];
        for (const user of res.body) {
          users.push({ id: user.id, name: user.name });
        }
        dispatch(getUsers(users));
      });
  };
}
