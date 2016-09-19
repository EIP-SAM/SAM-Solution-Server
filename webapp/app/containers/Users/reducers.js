//
// Users reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import UsersDeletionModalReducer from './Table/ModalDeletionUser/reducer';
import {
  GET_USERS,
} from './constants';

const initialState = {
  users: [],
};

function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of users page
//
export default combineReducers({
  UsersReducer,
  UsersDeletionModalReducer,
});
