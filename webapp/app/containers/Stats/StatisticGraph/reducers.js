//
// StatisticGraph Reducer
//

import {
  GET_STATS_BY_TYPE,
  GET_STATS_BY_TYPE_AND_NAME,
  RESET_STATE_GRAPH_DATA,
} from './constants';

const initialState = {
  stats_info: '',
  stats: [],
};

function StatisticGraphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATS_BY_TYPE:
      return Object.assign({}, state, {
        stats_info: action.statsInfo,
      });
    case GET_STATS_BY_TYPE_AND_NAME:
      return Object.assign({}, state, {
        stats: [
          ...state.stats,
          action.stats,
        ],
      });
    case RESET_STATE_GRAPH_DATA:
      return Object.assign({}, initialState, {});
    default:
      return state;
  }
}

export default StatisticGraphReducer;
