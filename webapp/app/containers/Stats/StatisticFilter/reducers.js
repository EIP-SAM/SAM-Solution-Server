//
// StatisticFilter Reducer
//

import STATS_GET_STATS_FILTERS_LIST from './constants';

const initialState = {
  filters: '',
};

function StatisticFilterReducer(state = initialState, action) {
  switch (action.type) {
    case STATS_GET_STATS_FILTERS_LIST:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    default:
      return state;
  }
}

export default StatisticFilterReducer;
