//
// CreateUser actions
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
import { browserHistory } from 'react-router';

import {
  CREATE_USER,
} from './constants';

export function createUser(user) {
  return {
    type: CREATE_USER,
    user: user,
  };
}

export function createUserRequest(users) {
  console.log('requete envoyee a /api/logged-in/admin/users/create :');
  console.log(users);
  return function returnCreateUserRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/users/create')
      .type('json')
      .send({ users })
      .end((err, res) => {
        console.log('reponse a /api/logged-in/admin/users/create :');
        console.log(res.body);

        if (err && res.statusCode == 401) {
          browserHistory.push('/login');
        }

        dispatch(createUser(res.body));
        if (!res.body.error) {
          dispatch(push('/edit-user/' + users[0].name));
        }
      });
  };
}
