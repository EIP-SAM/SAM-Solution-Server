//
// Instant save modal save history page Actions
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
import { resetStateForm } from 'containers/SaveCreation/Form/actions';
import { getHistorySavesByUserRequest } from 'containers/SaveHistory/actions';
import {
  SAVE_HISTORY_SHOW_INSTANT_SAVE_MODAL,
} from './constants';

export function showInstantSaveModal() {
  return {
    type: SAVE_HISTORY_SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: true,
  };
}

export function hideInstantSaveModal() {
  return {
    type: SAVE_HISTORY_SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: false,
  };
}

export function createSaveActionSaveHistory(users, date, time, frequency, files) {
  return function createSaveRequest(dispatch) {
    return request
      .post('/api/logged-in/create_save')
      .type('form')
      .send({
        usersId: users[0].id,
        date,
        time,
        frequency,
        files,
      })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        dispatch(resetStateForm());
        dispatch(getHistorySavesByUserRequest(users[0].name));
      });
  };
}
