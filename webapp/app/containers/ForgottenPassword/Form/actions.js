//
// ForgottenPassword form actions
//
// To add a new Action :
// 1) Import you constant
// 2) Add a function like this:
//    export function yourAction(var) {
//        return { type: YOUR_ACTION_CONSTANT, var: var }
//    }
//

import request from 'utils/request';
import { push } from 'react-router-redux';
import { forgottenPassword } from './Email/actions';

export default function forgottenPasswordRequest(email) {
  return function returnForgottenPasswordRequest(dispatch) {
    return request
      .post('/api/public/user/recover_password')
      .type('form')
      .send({ email })
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(forgottenPassword(res.body));
        if (res.body.success) {
          dispatch(push('/login'));
        }
      });
  };
}
