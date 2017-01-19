//
// Groups filter users actions
//

import request from 'utils/request';
import {
  USERS_USERS_GROUPS,
  USERS_CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: USERS_CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: USERS_USERS_GROUPS,
    groups,
  };
}

export function getGroupsRequest() {
  return function returnGetGroups(dispatch) {
    return request
    .get('/api/logged-in/admin/groups')
    .end((err, res) => {
      request.redirectHandling(res.statusCode);
      dispatch(getGroups(res.body.groups));
    });
  };
}
