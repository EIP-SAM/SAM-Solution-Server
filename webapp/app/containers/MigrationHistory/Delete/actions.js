//
// Migration History Create actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  MIGRATION_HISTORY_STATUS_DELETE_MODAL,
  MIGRATION_HISTORY_SET_MIGRATION_TO_BE_DELETED,
} from './constants';

export function setStatusDeleteMigrationModal(isPoppedUp, migration) {
  return {
    type: MIGRATION_HISTORY_STATUS_DELETE_MODAL,
    isPoppedUp,
    migration,
  };
}

export function setMigrationToBeDeleted(migration) {
  return {
    type: MIGRATION_HISTORY_SET_MIGRATION_TO_BE_DELETED,
    migration,
  };
}
