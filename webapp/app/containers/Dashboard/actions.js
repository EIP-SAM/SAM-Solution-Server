//
// BlockInfo actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { DASHBOARD_GET_SAVE_NUMBER } from './constants';

export function savesNumbers(saveNumbers) {
  return {
    type: DASHBOARD_GET_SAVE_NUMBER,
    saveNumbers,
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
