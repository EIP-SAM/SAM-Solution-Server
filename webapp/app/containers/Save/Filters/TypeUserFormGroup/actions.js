//
// Save filters Actions
//

import request from 'utils/request';

export function getVisibilityFilter() {
  return function returnGetvisibilityFilter() {
    return request
    .get('/api/logged-in/admin/save')
    .end(() => {
      console.log('ICIII');
      // const listUser = [];
      // if (typeUser !== 'All') {
      //   res.body.map(function (save) {
      //     console.log(save)
          // if (typeUser === 'Admins' && restore.isAdmin === true) {
          //   listUser.push(restore);
          // }
          // else if (typeUser === 'Users' && restore.isAdmin === false) {
          //   listUser.push(restore);
          // }
        // });
      //   dispatch(getRestores(listUser));
      // }
      // else {
      //   dispatch(getRestores(res.body));
      // }
    });
  };
}
