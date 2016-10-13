//
// StatisticGraph Actions
//

import request from 'utils/request';
import { browserHistory } from 'react-router';

import {
  STATS_GET_STATS_BY_TYPE_AND_NAME,
  STATS_RESET_STATE_GRAPH_DATA,
} from './constants';

export function getStatInfos(type, statsInfo) {
  return {
    type,
    statsInfo,
  };
}

export function getStats(type, stats) {
  return {
    type,
    stats,
  };
}

export function getGraphListByType(type) {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/admin/statistic_data_type_name_list')
      .query({ type })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic type data : ', res);
        } else {
          const allGraph = res.body;

          if (!allGraph) {
            return null;
          }

          const graphList = allGraph.data;

          if (graphList) {
            const graphNumber = graphList.length;

            for (let i = 0; i < graphNumber; i++) {
              dispatch(getGraphFromServerByTypeAndName(type, graphList[i]));
            }
          }
        }

        return null;
      });
  };
}

export function getGraphFromServerByTypeAndName(type, name) {
  return function startAction(dispatch) {
    return request
      .get('/api/logged-in/admin/statistic_data_by_type_name')
      .query({ type, name })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }

        if (err || res.body.error) {
          console.log('Error occured in request to server for statistic type data : ', res);
        } else {
          dispatch(getStats(STATS_GET_STATS_BY_TYPE_AND_NAME, res.body));
        }
      });
  };
}

export function clearGraph() {
  return function startAction(dispatch) {
    return dispatch({ type: STATS_RESET_STATE_GRAPH_DATA });
  };
}
