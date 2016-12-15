//
// Software Reducers
//

import { combineReducers } from 'redux-immutable';
import SoftwareFiltersReducer from './Filters/reducers';

import {
  SOFTWARE_USERS_GET_USERS,
  SOFTWARE_USERS_GET_USERS_OS,
  SOFTWARE_USERS_REFRESH,
} from './constants';

const initialState = {
  users: [],
  os: [],
  refresh: 0,
};

function SoftwareReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_USERS_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case SOFTWARE_USERS_GET_USERS_OS:
      return Object.assign({}, state, {
        os: action.os,
      });
    case SOFTWARE_USERS_REFRESH:
      return Object.assign({}, state, {
        refresh: action.refresh,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of software page
//
export default combineReducers({
  SoftwareReducer,
  SoftwareFiltersReducer,
});
