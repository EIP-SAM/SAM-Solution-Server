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
  USER_TYPE,
} from './constants';

const initialState = {
  restores: [],
  typeUser: '',
};

function RestoreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESTORES:
      return Object.assign({}, state, {
        restores: action.restores,
      });
    case USER_TYPE:
      return Object.assign({}, state, {
        typeUser: action.typeUser,
      });
    default:
      return state;
  }
}

export default RestoreReducer;
