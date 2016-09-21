//
// Filters restore page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import RestoreGroupsFilterReducer from './Groups/reducer';
import RestoreTypeUserFilterReducer from './TypeUser/reducer';
import {
  GET_ALL_USERS,
} from './constants';

const initialState = {
  allUsers: [],
  listTypeUsers: [],
  listGroupsUsers: [],
};

function RestoreFiltersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return Object.assign({}, state, {
        allUsers: action.allUsers,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of filters in restore page
//
export default combineReducers({
  RestoreFiltersReducer,
  RestoreGroupsFilterReducer,
  RestoreTypeUserFilterReducer,
});
