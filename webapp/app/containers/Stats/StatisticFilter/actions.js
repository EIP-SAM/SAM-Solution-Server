//
// StatisticFilter Actions
//

import request from 'utils/request';

import {
  GET_FILTERS,
} from './constants';

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
        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic filters');
        } else {
          dispatch(getFilters(GET_FILTERS, res.body));
        }
      });
  };
}
