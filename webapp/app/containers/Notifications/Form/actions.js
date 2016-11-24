//
// Notifications actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { resetStateDescription, descriptionErrorMsg } from './Description/actions';
import { resetStateTitle, titleErrorMsg } from './Title/actions';
import { resetStateAllUsers } from './Users/AllUsers/actions';
import { resetStateSelectedUsers } from './Users/SelectedUsers/actions';

export function resetStateForm() {
  return function resetState(dispatch) {
    dispatch(resetStateTitle());
    dispatch(resetStateDescription());
    dispatch(resetStateAllUsers());
    dispatch(resetStateSelectedUsers());
  };
}

export function notificationRequest(title, description, persistance, username) {
  return function returnNotificationRequest(dispatch) {
    return request
      .post('/api/logged-in/admin/notification/display')
      .type('form')
      .send({
        title,
        description,
        persistance,
        username,
      })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        if (res.body.errors && res.body.errors[0].error.includes('title')) {
          dispatch(titleErrorMsg(res.body.errors[0].error));
        } else if (res.body.errors && res.body.errors[0].error.includes('description')) {
          dispatch(descriptionErrorMsg(res.body.errors[0].error));
        } else {
          dispatch(resetStateForm());
        }
      });
  };
}
