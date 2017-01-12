//
// Users form notificaions actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//
import request from 'utils/request';
import { getUsers } from './AllUsers/actions';

export default function getUsersRequest() {
  return function returnGetUsersRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/users')
    .end((err, res) => {
      if (res.body.users) {
        const users = res.body.users.map(user => ({ id: user.id, name: user.name }));
        dispatch(getUsers(users));
      }
    });
  };
}
