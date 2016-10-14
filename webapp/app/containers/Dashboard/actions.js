//
// BlockInfo actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import {
  DASHBOARD_GET_SAVE_NUMBER,
  DASHBOARD_GET_RESTORE_NUMBER,
  DASHBOARD_GET_DEAMON_USER_CONNECTED,
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

export function deamonUsersConnected(deamonUserConnected) {
  return {
    type: DASHBOARD_GET_DEAMON_USER_CONNECTED,
    deamonUserConnected,
  };
}

export function getSavesNumbers(username) {
  return function returnSavesNumbers(dispatch) {
    return request.get('/api/logged-in/history_save')
    .query({ username })
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }

      dispatch(savesNumbers(res.body.length));
    });
  };
}

export function getRestoresNumbers(username) {
  return function returnRestoresNumbers(dispatch) {
    return request.get('/api/logged-in/history_restore')
    .query({ username })
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }

      dispatch(restoresNumbers(res.body.length));
    });
  };
}

export function getDeamonUsersConnected() {
  return function returnDeamonUsersConnected(dispatch) {
    return request.get('/api/logged-in/admin/deamon/connected')
    .end((err, res) => {
      if (err && res.statusCode === 401) {
        browserHistory.push('/login');
      }
      console.log(res);
      dispatch(deamonUsersConnected(res.body.nbrConnected));
    });
  };
}
