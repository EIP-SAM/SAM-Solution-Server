//
// Users table actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';

export function rebootUser(username) {
  return function rebootUserRequest() {
    return request
      .get('/api/logged-in/admin/reboot')
      .query({ username })
      .end((err, res) => {
        console.log(res);
      });
  };
}
