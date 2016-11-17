//
// Software Reducers
//

import { combineReducers } from 'redux-immutable';
import SoftwareFiltersReducer from './Filters/reducers';

import {
  SOFTWARE_USERS_GET_USERS,
} from './constants';

const initialState = {
  restores: [],
};

function SoftwareReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_USERS_GET_USERS:
      return Object.assign({}, state, {
        users: action.users,
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
