//
// Migration History Table actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';

import {
  MIGRATION_HISTORY_GET_ALL_MIGRATIONS,
} from './constants';

export function getAllMigrations(migrations) {
  return {
    type: MIGRATION_HISTORY_GET_ALL_MIGRATIONS,
    migrations,
  };
}

export function getAllMigrationsRequest() {
  return (dispatch) => (
    request
      .get('/api/logged-in/admin/migrations/')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(getAllMigrations([]));
        } else {
          dispatch(getAllMigrations(res.body.migrations));
        }
      })
  );
}
