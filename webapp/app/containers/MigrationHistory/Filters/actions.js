//
// Migration History Filters actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import {
  MIGRATION_HISTORY_SET_STATUS_FILTER,
} from './constants';

export function setStatusFilter(statusFilter) {
  return {
    type: MIGRATION_HISTORY_SET_STATUS_FILTER,
    statusFilter,
  };
}
