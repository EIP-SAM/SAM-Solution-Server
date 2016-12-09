//
// Migration History Delete reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  MIGRATION_HISTORY_STATUS_DELETE_MODAL,
  MIGRATION_HISTORY_SET_MIGRATION_TO_BE_DELETED,
} from './constants';

export default function MigrationHistoryDeleteReducer(state = {}, action) {
  switch (action.type) {
    case MIGRATION_HISTORY_STATUS_DELETE_MODAL:
      return Object.assign({}, state, {
        isPoppedUp: action.isPoppedUp,
        migration: action.migration,
      });
    case MIGRATION_HISTORY_SET_MIGRATION_TO_BE_DELETED:
      return Object.assign({}, state, {
        migration: action.migration,
      });
    default:
      return state;
  }
}
