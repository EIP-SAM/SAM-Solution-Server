//
// Migration History Filters reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import MIGRATION_HISTORY_SET_STATUS_FILTER from './constants';

export default function MigrationHistoryFiltersReducer(state = {}, action) {
  switch (action.type) {
    case MIGRATION_HISTORY_SET_STATUS_FILTER:
      return Object.assign({}, state, {
        statusFilter: action.statusFilter,
      });
    default:
      return state;
  }
}
