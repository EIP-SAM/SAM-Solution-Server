//
// SoftwareUsersList Reducer
//

import { combineReducers } from 'redux-immutable';
import SoftwareUsersListFiltersReducer from './Filters/reducers';

import {
  SOFTWARE_USERS_LIST_GET_USERS,
} from './constants';

const initialState = {
  restores: [],
};

function SoftwareUsersListReducer(state = initialState, action) {
  switch (action.type) {
    case SOFTWARE_USERS_LIST_GET_USERS:
      return Object.assign({}, state, {
        software_user_list: action.users,
      });
    default:
      return state;
  }
}

//
// Combine all reducers of save page
//
export default combineReducers({
  SoftwareUsersListReducer,
  SoftwareUsersListFiltersReducer,
});
