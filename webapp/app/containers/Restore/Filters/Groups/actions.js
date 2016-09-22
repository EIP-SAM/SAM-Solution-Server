//
// Groups filter restore actions
//

import request from 'utils/request';
import {
  USERS_GROUPS,
  CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: USERS_GROUPS,
    usersGroups,
  };
}

export function getGroupsRequest() {
  return function returnGetGroups(dispatch) {
    return request
    .get('/api/logged-in/admin/groups')
    .end((err, res) => {
      if (err && res.statusCode == 401) {
        browserHistory.push('/login');
      }
      dispatch(getUsersGroups(res.body.groups));
    });
  };
}
