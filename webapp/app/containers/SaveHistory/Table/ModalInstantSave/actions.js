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
import { resetStateForm } from 'containers/SaveCreation/Form/actions';
import { getHistorySavesByUserRequest } from 'containers/SaveHistory/actions';
import {
  SHOW_INSTANT_SAVE_MODAL,
} from './constants';

export function showInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: true,
  };
}

export function hideInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: false,
  };
}

export function createSaveActionSaveHistory(username, users, date, time, frequency, files) {
  const usersId = [];
  for (const user of users) {
    usersId.push(user.value);
  }

  return function createSaveRequest(dispatch) {
    return request
      .post('/api/logged-in/create_save')
      .type('form')
      .send({
        usersId,
        date,
        time,
        frequency,
        files,
      })
      .end(() => {
        dispatch(resetStateForm());
        dispatch(getHistorySavesByUserRequest(username));
      });
  };
}
