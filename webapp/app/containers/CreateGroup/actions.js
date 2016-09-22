//
// CreateGroup actions
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
  CREATE_GROUP,
} from './constants';

export function createGroup(group) {
  return {
    type: CREATE_GROUP,
    group: group,
  };
}

export function createGroupRequest(groups) {
  return function returnCreateGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/groups/create')
      .type('json')
      .send({ groups })
      .end((err, res) => {
        dispatch(createGroup(res.body));
        if (!res.body.error) {
          var last = res.body.groups.length - 1;
          browserHistory.push('/edit-group/' + res.body.groups[last].id);
        }
    });
  };
}
