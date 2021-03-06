//
// Restore actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { getAllUsers } from './Filters/actions';
import RESTORE_GET_RESTORES from './constants';

export function getRestores(restores) {
  return {
    type: RESTORE_GET_RESTORES,
    restores,
  };
}

export function getRestoresRequest() {
  return function returnGetRestoresRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/restore')
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(getRestores(res.body));
        dispatch(getAllUsers(res.body));
      });
  };
}
