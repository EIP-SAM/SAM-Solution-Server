//
// Groups filter save page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_GROUPS,
  SAVE_CURRENT_GROUP,
} from './constants';

const initialState = {
  groups: [],
  currentGroup: 'All',
};

function SaveGroupsFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_GROUPS:
      return Object.assign({}, state, {
        groups: action.groups,
      });
    case SAVE_CURRENT_GROUP:
      return Object.assign({}, state, {
        currentGroup: action.currentGroup,
      });
    default:
      return state;
  }
}

export default SaveGroupsFilterReducer;
