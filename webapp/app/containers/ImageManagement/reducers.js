//
// Image Management reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  IMAGE_MANAGEMENT_SET_ADDIMAGE_VISIBILITY,
  IMAGE_MANAGEMENT_SET_FILENAME,
  IMAGE_MANAGEMENT_SET_IMAGES,
  IMAGE_MANAGEMENT_SET_NEW_FILES,
} from './constants';

export default function MigrationHistoryCreateReducer(state = {}, action) {
  switch (action.type) {
    case IMAGE_MANAGEMENT_SET_ADDIMAGE_VISIBILITY:
      return Object.assign({}, state, {
        isVisible: action.isVisible,
      });
    case IMAGE_MANAGEMENT_SET_FILENAME:
      return Object.assign({}, state, {
        fileName: action.fileName,
      });
    case IMAGE_MANAGEMENT_SET_IMAGES:
      return Object.assign({}, state, {
        images: action.images,
      });
    case IMAGE_MANAGEMENT_SET_NEW_FILES:
      return Object.assign({}, state, {
        newFiles: action.newFiles,
      });
    default:
      return state;
  }
}
