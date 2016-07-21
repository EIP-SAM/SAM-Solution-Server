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

const request = require('superagent');
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

export function createGroupRequest(group) {
  console.log('requete envoyee a /api/logged-in/admin/groups/create :');
  console.log(group);
  return function returnCreateGroupRequest(dispatch) {
    return request
      .post('http://localhost:8080/api/logged-in/admin/groups/create')
      .type('json')
      .send({ group })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/groups/create :');
        console.log(res.body);
        dispatch(createGroup(res.body));
    });
  };
}
