//
// Edit user form actions
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
  EDIT_USER_GET_ALL_GROUPS,
  EDIT_USER_USER_GROUPS,
  EDIT_USER_RESET_STATE_GROUPS,
} from './constants';

export function getUserGroups(userGroups) {
  return {
    type: EDIT_USER_USER_GROUPS,
    userGroups,
  };
}

export function getAllGroups(allGroups) {
  return {
    type: EDIT_USER_GET_ALL_GROUPS,
    allGroups,
  };
}

export function resetStateGroups() {
  return {
    type: EDIT_USER_RESET_STATE_GROUPS,
  };
}

export function getGroupsRequest() {
  return function returnGetGroupsRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/groups')
      .end((err, res) => {
        request.redirectHandling(res.statusCode);

        let groupsName = [];
        if (res.body.groups.length > 0) {
          groupsName = res.body.groups.map(group => group.name);
        }
        dispatch(getAllGroups(groupsName));
      });
  };
}
