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
  const fakeMigrations = [
    { status: 'done', userId: 1, userName: 'alex', image: 'Debian', date: Date(), comment: 'test' },
    { status: 'in progress', userId: 2, userName: 'jean', image: 'Windows 10', date: Date(), comment: 'test 2' },
    { status: 'planned', userId: 3, userName: 'fernand', image: 'Ubuntu', date: Date(), comment: 'test 3' },
  ];
  return (dispatch) => (
    dispatch(getAllMigrations(fakeMigrations))
  );
}
