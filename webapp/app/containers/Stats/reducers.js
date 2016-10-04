//
// Stats Reducer
//

import { combineReducers } from 'redux-immutable';
import StatisticGraphReducer from 'containers/Stats/StatisticGraph/reducers';
import StatisticFilterReducer from 'containers/Stats/StatisticFilter/reducers';

export default combineReducers({
  statGraphs: StatisticGraphReducer,
  statFilters: StatisticFilterReducer,
});
