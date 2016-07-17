//
// Users actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

const request = require('../../agent');

import {
  GET_USERS,
} from './constants';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users: users,
  }
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('http://localhost:8080/api/logged-in/admin/users')
      .end((err, res) => {
        dispatch(getUsers(res.body));
    });
  };
}
