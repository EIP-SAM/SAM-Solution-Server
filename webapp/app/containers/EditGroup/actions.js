//
// EditGroup actions
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
  EDIT_GROUP,
  GET_GROUP,
  GET_USERS,
} from './constants';

export function getGroup(group) {
  return {
    type: GET_GROUP,
    group,
  };
}

export function getGroupRequest(id, callback) {
  return function returnGetGroupRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/group?id=' + id)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        dispatch(getGroup(res.body));
        callback(res.body.users);
      });
  };
}

export function editGroup(group) {
  return {
    type: EDIT_GROUP,
    group,
  };
}

export function editGroupRequest(group) {
  return function returnEditGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/group/update')
      .type('json')
      .send(group)
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(editGroup(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-group/' + group.id);
        }
      });
  };
}

export function getUsers(users, group) {
  var usersGroups = [];
  var i = 0;
  if (group) {
    while (i < users.length) {
      var j = 0;
      while (j < group.length) {
        if (group[j].id == users[i].id) {
          usersGroups.push(true);
          break;
        }
        ++j;
        if (j == group.length)
          usersGroups.push(false);
      }
      i++;
    }
  }

  return {
    type: GET_USERS,
    users,
    usersGroups,
  };
}

export function getUsersRequest(users) {
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getUsers(res.body.users, users));
      });
  };
}
