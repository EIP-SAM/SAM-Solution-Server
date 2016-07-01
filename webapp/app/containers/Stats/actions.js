//
// Stats Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
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
          console.log('Error occured');
        } else {
          dispatch(getStats(GET_STATS, res.body));
        }
      });
  };
}
