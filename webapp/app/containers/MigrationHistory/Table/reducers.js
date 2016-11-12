//
// Migration History Table reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  MIGRATION_HISTORY_GET_ALL_MIGRATIONS,
} from './constants';

export default function MigrationHistoryTableReducer(state = { migrations: [] }, action) {
  switch (action.type) {
    case MIGRATION_HISTORY_GET_ALL_MIGRATIONS:
      return Object.assign({}, state, {
        migrations: action.migrations,
      });
    default:
      return state;
  }
}
