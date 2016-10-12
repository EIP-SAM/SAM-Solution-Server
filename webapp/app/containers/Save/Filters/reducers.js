//
// Filters save page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SaveGroupsFilterReducer from './Groups/reducer';
import SaveTypeUserFilterReducer from './TypeUser/reducer';
import {
  SAVE_GET_ALL_USERS,
} from './constants';

const initialState = {
  allUsers: [],
  listTypeUsers: [],
  listGroupsUsers: [],
};

function SaveFiltersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_GET_ALL_USERS:
      return Object.assign({}, state, {
        allUsers: action.allUsers,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of filters in save page
//
export default combineReducers({
  SaveFiltersReducer,
  SaveGroupsFilterReducer,
  SaveTypeUserFilterReducer,
});
