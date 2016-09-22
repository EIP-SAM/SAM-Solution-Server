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
    group: group,
  }
}

export function getGroupRequest(groupname, callback) {
  console.log('get : /api/logged-in/admin/groups :');
  return function returnGetGroupRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/groups :');
        console.log(res.body);

        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        var i = 0;
        while (i < res.body.groups.length && res.body.groups[i].name != groupname) {
          ++i;
        }
        console.log('group affiche sur la page : ');
        if (!res.body.groups[i]) {
          var group = {error: 'Error : Group ' + groupname + ' not found'};
          console.log(group);
          dispatch(getGroup(group));
        } else {
          console.log(res.body.groups[i]);
          dispatch(getGroup(res.body.groups[i]));
          callback(res.body.groups[i].users);
        }
    });
  };
}

export function editGroup(group) {
  return {
    type: EDIT_GROUP,
    group: group,
  };
}

export function editGroupRequest(groups) {
  console.log('requete envoyee a /api/logged-in/admin/groups/update :');
  console.log(groups);
  return function returnEditGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/groups/update')
      .type('json')
      .send({ groups })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/groups/update :');
        console.log(res.body);

        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(editGroup(res.body));
        if (res.body.name) {
          browserHistory.push('/edit-group/' + groups[0].name);
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
    users: users,
    usersGroups: usersGroups,
  }
}

export function getUsersRequest(users) {
  console.log('get : /api/logged-in/admin/users :');
  return function returnGetUsersRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/users')
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/users :');
        console.log(res.body);

        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getUsers(res.body.users, users));
    });
  };
}
