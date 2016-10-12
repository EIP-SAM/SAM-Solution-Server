//
// Type user filter save page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  SAVE_CURRENT_TYPE_USER,
} from './constants';

const initialState = {
  currentTypeUser: 'All',
};

function SaveTypeUserFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CURRENT_TYPE_USER:
      return Object.assign({}, state, {
        currentTypeUser: action.currentTypeUser,
      });
    default:
      return state;
  }
}

export default SaveTypeUserFilterReducer;
