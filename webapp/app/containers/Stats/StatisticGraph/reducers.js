//
// StatisticGraph Reducer
//

import {
  GET_STATS,
  GET_STATS_BY_TYPE
} from './constants';

function StatisticGraphReducer (state = {}, action) {
  switch (action.type) {
    case GET_STATS_BY_TYPE:
      return Object.assign({}, state, {
        stats: action.stats,
      });
    default:
      return state;
  }
}

export default StatisticGraphReducer;
