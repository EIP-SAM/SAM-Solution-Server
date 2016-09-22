//
// EditUser actions
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
  GET_USER,
  GET_CURRENT_USER,
  EDIT_USER,
  GET_GROUPS,
} from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    user,
  };
}

export function getUserRequest(username, callback) {
  return function returnGetUserRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        var i = 0;
        while (i < res.body.users.length && res.body.users[i].name != username) {
          ++i;
        }
        if (!res.body.users[i]) {
          var user = { error: 'Error : User ' + username + ' not found' };
          dispatch(getUser(user));
        } else {
          dispatch(getUser(res.body.users[i]));
          callback(res.body.users[i].groups);
        }
      });
  };
}

export function getCurrentUser(user) {
  return {
    type: GET_CURRENT_USER,
    currentUser: user,
  };
}

export function getCurrentUserRequest() {
  return function returnGetCurrentUserRequest(dispatch) {
    return request
      .get('/api/logged-in/user/profile')
      .end((err, res) => {
        dispatch(getCurrentUser(res.body));
      });
  };
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    user,
  };
}

export function editUserAdminRequest(users) {
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/update')
      .type('json')
      .send({ users })
      .end((err, res) => {
        dispatch(editUser(res.body));
        if (res.body.users) {
          browserHistory.push('/edit-user/' + users[0].name);
        }
      });
  };
}

export function editUserRequest(user) {
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/profile/update')
      .type('json')
      .send(user)
      .end((err, res) => {
        dispatch(editUser(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-user/' + users[0].name);
        }
      });
  };
}

export function getGroups(groups, user) {
  var usersGroups = [];
  var i = 0;
  while (i < groups.length) {
    var j = 0;
    while (j < user.length) {
      if (user[j].id == groups[i].id) {
        usersGroups.push(true);
        break;
      }
      ++j;
      if (j == user.length)
        usersGroups.push(false);
    }
    i++;
  }

  return {
    type: GET_GROUPS,
    groups,
    usersGroups,
  };
}

export function getGroupsRequest(groups) {
  return function returnGetGroupsRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        dispatch(getGroups(res.body.groups, groups));
      });
  };
}
