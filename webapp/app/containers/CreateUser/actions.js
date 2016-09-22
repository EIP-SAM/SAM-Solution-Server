//
// CreateUser actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';

import { browserHistory } from 'react-router';

import {
  CREATE_USER,
} from './constants';

export function createUser(user) {
  return {
    type: CREATE_USER,
    user: user,
  };
}

export function createUserRequest(users) {
  return function returnCreateUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/create')
      .type('json')
      .send({ users })
      .end((err, res) => {
        dispatch(createUser(res.body));
        if (!res.body.error) {
          var last = res.body.users.length - 1;
          browserHistory.push('/edit-user/' + res.body.users[last].id);
        }
      });
  };
}
