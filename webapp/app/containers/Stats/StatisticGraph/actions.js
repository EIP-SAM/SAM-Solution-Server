//
// StatisticGraph Actions
//

import request from 'superagent';

import {
  GET_STATS,
} from './constants';

export function getStats(type, stats) {
  return {
    type,
    stats,
  };
}

export function getStatsFromServer() {
  return function startAction(dispatch) {
    return request
      .get('http://localhost:8080/statistic_data/')
      .end((err, res) => {
        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic data');
        } else {
          dispatch(getStats(GET_STATS, res.body));
        }
      });
  };
}
