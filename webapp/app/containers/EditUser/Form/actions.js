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
  EDIT_USER,
  GET_GROUPS,
  GET_CURRENT_USER,
} from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    user,
  };
}

export function getUserRequest(id) {
  return function returnGetUserRequest(dispatch) {
    return request
      .get(`/api/logged-in/user?id=${id}`)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        dispatch(getUser(res.body));
        dispatch(getGroupsRequest(res.body.groups));
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
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

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
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(editUser(res.body));
        if (res.body.users) {
          browserHistory.push(`/edit-user/${users[0].name}`);
        }
      });
  };
}

export function editUserRequest(user) {
  return function returnEditUserRequest(dispatch) {
    return request
      .post('/api/logged-in/user/update')
      .type('json')
      .send(user)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(editUser(res.body));
        if (res.body.name) {
          browserHistory.push(`/edit-user/${user.id}`);
        }
      });
  };
}

export function getGroups(groups, user) {
  const usersGroups = [];
  let i = 0;
  while (i < groups.length) {
    let j = 0;
    while (j < user.length) {
      if (user[j].name === groups[i].name) {
        usersGroups.push(true);
        break;
      }
      ++j;
      if (j === user.length) {
        usersGroups.push(false);
      }
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
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getGroups(res.body.groups, groups));
      });
  };
}
