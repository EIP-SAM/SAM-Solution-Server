//
// SoftwareUsersList Actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { getAllUsers } from './Filters/actions';

import {
  SOFTWARE_USERS_LIST_GET_USERS,
} from './constants';

export function getUsers(users) {
  return {
    type: SOFTWARE_USERS_LIST_GET_USERS,
    users,
  };
}

export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    // return request
    //   .get('/api/logged-in/admin/restore')
    //   .end((err, res) => {
    //     if (err && res.statusCode === 401) {
    //       browserHistory.push('/login');
    //     }
    //
    //     dispatch(getRestores(res.body));
    //     dispatch(getAllUsers(res.body));
    //   });
  };
}
