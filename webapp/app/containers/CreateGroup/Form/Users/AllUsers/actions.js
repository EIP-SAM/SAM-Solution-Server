//
// CreateGroup actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//
import request from 'utils/request';
import {
  GET_USERS,
} from './constants';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/users')
    .end((err, res) => {
      if (res.body.users) {
        dispatch(getUsers(res.body.users));
      }
    });
  };
}
