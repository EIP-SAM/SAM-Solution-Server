//
// Groups form notificaions actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//
import request from 'utils/request';
import { getGroups } from './AllGroups/actions';

export default function getGroupsRequest() {
  return function returnGetGroupsRequest(dispatch) {
    return request
    .get('/api/logged-in/admin/groups')
    .end((err, res) => {
      if (res.body.groups) {
        const groups = res.body.groups.map(group => ({ id: group.id, name: group.name }));
        dispatch(getGroups(groups));
      }
    });
  };
}
