//
// Restore type user filters actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { getRestores } from 'containers/Restore/actions';
import { browserHistory } from 'react-router';

export function getVisibilityFilter(typeUser) {
  return function returnGetvisibilityFilter(dispatch) {
    return request
    .get('/api/logged-in/admin/restore')
    .end((err, res) => {

      if (err && res.statusCode == 401) {
        browserHistory.push('/login');
      }

      const listUser = [];
      if (typeUser !== 'All') {
        res.body.map((restore) => {
          if (typeUser === 'Admins' && restore.isAdmin === true) {
            listUser.push(restore);
          } else if (typeUser === 'Users' && restore.isAdmin === false) {
            listUser.push(restore);
          }
          return true;
        });
        dispatch(getRestores(listUser));
      } else {
        dispatch(getRestores(res.body));
      }
    });
  };
}
