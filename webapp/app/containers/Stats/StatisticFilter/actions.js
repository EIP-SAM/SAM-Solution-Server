//
// StatisticFilter Actions
//

import request from 'utils/request';
import STATS_GET_STATS_FILTERS_LIST from './constants';

export function getFilters(type, filters) {
  return {
    type,
    filters,
  };
}

export function getFiltersFromServer() {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/admin/statistic_filters')
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic filters');
        } else {
          dispatch(getFilters(STATS_GET_STATS_FILTERS_LIST, res.body));
        }
      });
  };
}
