//
// Save History Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { getUsers } from 'containers/Save/actions';

import {
  GET_HISTORY_SAVES_BY_USER,
} from './constants';

export function getHistorySavesByUser(saves) {
  return {
    type: GET_HISTORY_SAVES_BY_USER,
    saves,
  };
}

export function getHistorySavesByUserRequest(username) {
  return function returnGetHistorySavesRequest(dispatch) {
    return request
      .get('/api/logged-in/history_save')
      .query({ username })
      .end((err, res) => {
        dispatch(getHistorySavesByUser(res.body));
        const users = [{ id: res.body[0].save_scheduled.user.id, name: res.body[0].save_scheduled.user.name }];
        dispatch(getUsers(users));
      });
  };
}
