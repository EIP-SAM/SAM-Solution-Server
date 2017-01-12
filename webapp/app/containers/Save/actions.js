//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { getAllUsers } from './Filters/actions';
import SAVE_GET_SAVES from './constants';

export function getSaves(saves) {
  return {
    type: SAVE_GET_SAVES,
    saves,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return request
      .get('/api/logged-in/admin/save')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(getSaves(res.body));
        dispatch(getAllUsers(res.body));
      });
  };
}
