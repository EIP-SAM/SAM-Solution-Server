//
// BlockInfo actions
//

import request from 'utils/request';
import {
  DASHBOARD_GET_SAVE_NUMBER,
  DASHBOARD_GET_RESTORE_NUMBER,
} from './constants';

export function savesNumbers(saveNumbers) {
  return {
    type: DASHBOARD_GET_SAVE_NUMBER,
    saveNumbers,
  };
}

export function restoresNumbers(restoreNumbers) {
  return {
    type: DASHBOARD_GET_RESTORE_NUMBER,
    restoreNumbers,
  };
}

export function getSavesNumbers(username) {
  return function returnSavesNumbers(dispatch) {
    return request.get('/api/logged-in/history_save')
    .query({ username })
    .end((err, res) => {
      request.redirectHandling(res.statusCode);
      dispatch(savesNumbers(res.body.length));
    });
  };
}

export function getRestoresNumbers(username) {
  return function returnRestoresNumbers(dispatch) {
    return request.get('/api/logged-in/history_restore')
    .query({ username })
    .end((err, res) => {
      request.redirectHandling(res.statusCode);
      dispatch(restoresNumbers(res.body.length));
    });
  };
}
