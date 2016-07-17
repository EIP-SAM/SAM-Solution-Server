//
// StatisticGraph Actions
//

import request from 'superagent';

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

// --------------------------------------------

export function getGraphFromServer(type) {
  return function startAction(dispatch) {
    return request
      .get('http://localhost:8080/statistic_select_graph/')
      .set('type', type)
      .end((err, res) => {
        if (err || res.body.error) {
          //console.log('Error occured in request to server for statistic type data : ', res);
        } else {
          dispatch(getStats(GET_STATS_BY_TYPE, res.body));
        }
      });
  };
}
