//
// Software Actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import socket from 'utils/socket-io';
import store from 'app';
import { getAllUsers } from './Filters/actions';

import {
  SOFTWARE_USERS_GET_USERS,
  SOFTWARE_USERS_REFRESH,
} from './constants';

export function getUsers(users) {
  return {
    type: SOFTWARE_USERS_GET_USERS,
    users,
  };
}

export function getRefresh(refresh) {
  return {
    type: SOFTWARE_USERS_REFRESH,
    refresh,
  };
}

export function getUsersOsRequest() {
  return function returnGetUsersRequest() {
    socket.emit('webapp_all_users');
  };
}

/* eslint-disable no-param-reassign */
socket.on('server_all_software', (data) => {
  const users = store.getState().get('software').get('SoftwareReducer').users;

  users.forEach((user) => {
    if (user.name === data.username) {
      user.os = data.operatingSystem;
    }
  });

  store.dispatch(getUsers(users));
  store.dispatch(getRefresh(!store.getState().get('software').get('SoftwareReducer').refresh));
});

/* eslint-disable no-param-reassign */
export function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        res.body.users.forEach((element) => {
          element.os = '';
        });
        dispatch(getUsers(res.body.users));
        dispatch(getAllUsers(res.body.users));
        dispatch(getUsersOsRequest());
      });
  };
}
