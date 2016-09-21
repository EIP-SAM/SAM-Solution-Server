//
// Groups filter restore actions
//

import request from 'utils/request';
import {
  GROUPS,
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
    type: GROUPS,
    groups,
  };
}

export function getGroupsRequest() {
  return function returnGetGroups(dispatch) {
    return request
    .get('/api/logged-in/admin/groups')
    .end((err, res) => {
      dispatch(getGroups(res.body.groups));
    });
  };
}
