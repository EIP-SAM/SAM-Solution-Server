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

import { push } from 'react-router-redux';

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
  console.log('requete envoyee a /api/logged-in/admin/groups/create :');
  console.log(groups);
  return function returnCreateGroupRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/groups/create')
      .type('json')
      .send({ groups })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/groups/create :');
        console.log(res.body);
        dispatch(createGroup(res.body));
        if (!res.body.error) {
          dispatch(push('/edit-group/' + groups[0].name));
        }
    });
  };
}
