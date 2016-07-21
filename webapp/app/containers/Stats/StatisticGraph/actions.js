//
// StatisticGraph Actions
//

import request from 'utils/request';

import {
  GET_STATS_BY_TYPE,
} from './constants';

export function getStats(type, stats) {
  return {
    type,
    stats,
  };
}

// ----- TO DELETE ONCE ALL FINISHED

export function getAllGraphFromServer() {
  return function startAction(dispatch) {
    return request
      .get('/statistic_data/')
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic data');
        } else {
          dispatch(getStats(GET_STATS, res.body));
        }
      });
  };
}

// --------------------------------------------

export function getGraphFromServer(type) {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/admin/statistic_select_graph')
      .query({ type })
      .end((err, res) => {
        if (err || res.body.error) {
          // console.log('Error occured in request to server for statistic type data : ', res);
        } else {
          dispatch(getStats(GET_STATS_BY_TYPE, res.body));
        }
      });
  };
}
