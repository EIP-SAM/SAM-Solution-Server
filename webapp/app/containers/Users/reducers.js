//
// Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import {
  GET_USERS,
  SHOW_INSTANT_DELETE_MODAL,
} from './constants';

const initialState = {
  showModal: false,
  users: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case SHOW_INSTANT_DELETE_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal,
      });
    default:
      return state;
  }
}

export default usersReducer;
