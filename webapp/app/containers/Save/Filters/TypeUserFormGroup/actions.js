//
// Save filters Actions
//

import request from 'utils/request';
import { getSaves } from 'containers/Save/actions'

export function getVisibilityFilter(typeUser) {
  return function returnGetvisibilityFilter(dispatch) {
    return request
    .get('/api/logged-in/admin/save')
    .end((err, res) => {
      const listUser = [];
      if (typeUser !== 'All') {
        res.body.map(function (save) {
          if (typeUser === 'Admins' && save.isAdmin === true) {
            listUser.push(save);
          }
          else if (typeUser === 'Users' && save.isAdmin === false) {
            listUser.push(save);
          }
        });
        dispatch(getSaves(listUser));
      }
      else {
        dispatch(getSaves(res.body));
      }
    });
  };
}
