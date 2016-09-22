//
// Form create user actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//
import { browserHistory } from 'react-router';
import request from 'utils/request';

export function createUserRequest(username, email, password, passwordConfirmation, selectedGroup) {
  const users = [{
    name: username,
    email,
    password,
    confirmation: passwordConfirmation,
    groups: selectedGroup,
  }];
  return function returnCreateUserRequest() {
    return request
      .post('/api/logged-in/admin/users/create')
      .type('json')
      .send({ users })
      .end(() => {
        browserHistory.goBack();
      });
  };
}
