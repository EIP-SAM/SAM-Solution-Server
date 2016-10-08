//
// StatisticGraph Reducer
//

import {
  STATS_GET_STATS_BY_TYPE_AND_NAME,
  STATS_RESET_STATE_GRAPH_DATA,
} from './constants';

const initialState = {
  stats_info: '',
  stats: [],
};

function StatisticGraphReducer(state = initialState, action) {
  switch (action.type) {
    case STATS_GET_STATS_BY_TYPE_AND_NAME:
      return Object.assign({}, state, {
        stats: [
          ...state.stats,
          action.stats,
        ],
      });
    case STATS_RESET_STATE_GRAPH_DATA:
      return Object.assign({}, initialState, {});
    default:
      return state;
  }
}

export default StatisticGraphReducer;
