//
// Groups form create user actions
//

import request from 'utils/request';
import {
  GROUPS,
  SELECTED_GROUPS,
} from './constants';

export function getSelectedGroup(selectedGroup) {
  return {
    type: SELECTED_GROUPS,
    selectedGroup,
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
