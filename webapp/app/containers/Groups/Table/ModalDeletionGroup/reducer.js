//
// Group deletion modal in groups reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GROUPS_SHOW_INSTANT_DELETE_MODAL,
  GROUPS_GROUP_TO_DELETE,
} from './constants';

const initialState = {
  showModal: false,
  groupId: -1,
  groupName: '',
};

function GroupsDeletionModalReducer(state = initialState, action) {
  switch (action.type) {
    case GROUPS_SHOW_INSTANT_DELETE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    case GROUPS_GROUP_TO_DELETE:
      return Object.assign({}, state, {
        groupId: action.groupId,
        groupName: action.groupName,
      });
    default:
      return state;
  }
}

export default GroupsDeletionModalReducer;
