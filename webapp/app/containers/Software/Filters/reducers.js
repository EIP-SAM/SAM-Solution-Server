//
// Filters software page reducer
//
// To add a new action:
//
// Example:
//  case YOUR_ACTION_CONSTANT:
//    return state.set('yourStateVariable', true);
//

import { combineReducers } from 'redux-immutable';
import SoftwareGroupsFilterReducer from './Groups/reducer';
import SoftwareTypeUserFilterReducer from './TypeUser/reducer';
import {
  SOFTWARE_GET_ALL_USERS,
} from './constants';

const initialState = {
  allUsers: [],
};

function SoftwareFiltersReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_GET_ALL_USERS:
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
  SoftwareFiltersReducer,
  SoftwareGroupsFilterReducer,
  SoftwareTypeUserFilterReducer,
});
