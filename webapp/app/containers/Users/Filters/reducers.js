//
// Filters users page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import UsersGroupsFilterReducer from './Groups/reducer';
import UsersTypeUserFilterReducer from './TypeUser/reducer';
import {
  USERS_GET_ALL_USERS,
} from './constants';

const initialState = {
  allUsers: [],
};

function UsersFiltersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_GET_ALL_USERS:
      return Object.assign({}, state, {
        allUsers: action.allUsers,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of filters in user page
//
export default combineReducers({
  UsersFiltersReducer,
  UsersGroupsFilterReducer,
  UsersTypeUserFilterReducer,
});
