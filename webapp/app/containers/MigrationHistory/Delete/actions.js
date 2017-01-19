//
// Migration History delete actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { getAllMigrationsRequest } from '../Table/actions';
import {
  MIGRATION_HISTORY_STATUS_DELETE_MODAL,
} from './constants';

export function setStatusDeleteMigrationModal(isPoppedUp, migration) {
  return {
    type: MIGRATION_HISTORY_STATUS_DELETE_MODAL,
    isPoppedUp,
    migration,
  };
}

export function deleteMigration(migrationId) {
  return dispatch => (
    request
      .del(`/api/logged-in/admin/migration/${migrationId}/delete`)
      .end((err, res) => {
        request.redirectHandling(res.statusCode);
        dispatch(getAllMigrationsRequest());
      })
  );
}
