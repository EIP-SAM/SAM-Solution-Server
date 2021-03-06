//
// Groups form create user actions
//

import request from 'utils/request';
import {
  CREATE_USER_GROUPS,
  CREATE_USER_SELECTED_GROUPS,
  CREATE_USER_RESET_STATE_GROUPS,
} from './constants';

export function resetStateGroups() {
  return {
    type: CREATE_USER_RESET_STATE_GROUPS,
  };
}

export function getSelectedGroup(selectedGroup) {
  return {
    type: CREATE_USER_SELECTED_GROUPS,
    selectedGroup,
  };
}

export function getGroups(groups) {
  return {
    type: CREATE_USER_GROUPS,
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
