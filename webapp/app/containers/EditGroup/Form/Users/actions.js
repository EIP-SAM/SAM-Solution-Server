//
// Users form edit group actions
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
import { addUsersToGroup } from './SelectedUsers/actions';

export function getUsersRequest(currentGroup) {
  return function returnGetUsersRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/users')
    .end((err, res) => {
      if (res.body.users) {
        const selectedUsers = [];
        let users = res.body.users.map((user) => {
          for (let group of user.groups) {
            if (group.name === currentGroup) {
              selectedUsers.push({ id: user.id, name: user.name });
              return undefined;
            }
          }
          return { id: user.id, name: user.name };
        });
        users = users.filter((n) => n !== undefined);
        dispatch(getUsers(users));
        dispatch(addUsersToGroup(selectedUsers));
      }
    });
  };
}
