//
// Migration History Create reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  MIGRATION_HISTORY_STATUS_CREATE_POPUP,
  MIGRATION_HISTORY_GET_ALL_IMAGES,
  MIGRATION_HISTORY_GET_ALL_USERS,
  MIGRATION_HISTORY_CREATE_SET_USER,
  MIGRATION_HISTORY_CREATE_SET_IMAGE,
} from './constants';

export default function MigrationHistoryCreateReducer(state = {}, action) {
  switch (action.type) {
    case MIGRATION_HISTORY_STATUS_CREATE_POPUP:
      return Object.assign({}, state, {
        isPoppedUp: action.isPoppedUp,
        migrationEdited: action.migrationEdited,
      });
    case MIGRATION_HISTORY_GET_ALL_IMAGES:
      return Object.assign({}, state, {
        images: action.images,
      });
    case MIGRATION_HISTORY_GET_ALL_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case MIGRATION_HISTORY_CREATE_SET_USER:
      return Object.assign({}, state, {
        userId: action.userId,
      });
    case MIGRATION_HISTORY_CREATE_SET_IMAGE:
      return Object.assign({}, state, {
        imageId: action.imageId,
      });
    default:
      return state;
  }
}
