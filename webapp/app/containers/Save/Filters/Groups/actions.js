//
// Groups filter save actions
//

import request from 'utils/request';
import {
  SAVE_GROUPS,
  SAVE_CURRENT_GROUP,
} from './constants';

export function getCurrentGroup(currentGroup) {
  return {
    type: SAVE_CURRENT_GROUP,
    currentGroup,
  };
}

export function getGroups(groups) {
  return {
    type: SAVE_GROUPS,
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
