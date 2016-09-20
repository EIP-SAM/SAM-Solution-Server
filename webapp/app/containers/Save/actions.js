//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';

import {
  GET_SAVES,
} from './constants';

import { getGroupsFormUsers } from './Filters/GroupsFormGroup/actions';
import { getTypeFormUsers } from './Filters/TypeUserFormGroup/actions';

export function getSaves(saves) {
  return {
    type: GET_SAVES,
    saves,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/save')
      .end((err, res) => {
        dispatch(getSaves(res.body));
        dispatch(getGroupsFormUsers(res.body));
        dispatch(getTypeFormUsers(res.body));
      });
  };
}
