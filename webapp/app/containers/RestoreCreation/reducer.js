//
// Save Reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_RESTORES,
  USER,
  LIST_FILES,
  LIST_SAVES,
} from './constants';

const initialState = {
  user: '',
  files: [],
  saves: [],
  restores: [],
}

function RestoreCreationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESTORES:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    case USER:
      return Object.assign({}, state, {
        user: action.user,
      });
    case LIST_FILES:
      return Object.assign({}, state, {
        files: action.files,
      });
    case LIST_SAVES:
      return Object.assign({}, state, {
        saves: action.saves,
      });
    default:
      return state;
  }
}

export default RestoreCreationReducer;
