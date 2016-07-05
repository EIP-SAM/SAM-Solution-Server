//
// StatisticGraph Reducer
//

import {
  GET_STATS,
} from './constants';

function StatisticGraphReducer (state = {}, action) {
  switch (action.type) {
    case GET_STATS:
      return Object.assign({}, state, {
        stats: action.stats,
      });
    default:
      return state;
  }
}

export default StatisticGraphReducer;
