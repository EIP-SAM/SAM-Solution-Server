//
// StatisticFilter Reducer
//

import {
  GET_FILTERS,
} from './constants';

function StatisticFilterReducer (state = {}, action) {
  switch (action.type) {
    case GET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters,
      });
    default:
      return state;
  }
}

export default StatisticFilterReducer;
