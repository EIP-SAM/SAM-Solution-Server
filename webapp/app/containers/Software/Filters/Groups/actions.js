//
// Groups filter software actions
//

import request from 'utils/request';
import {
  SOFTWARE_USERS_GROUPS,
  SOFTWARE_CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: SOFTWARE_CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: SOFTWARE_USERS_GROUPS,
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
