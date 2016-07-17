/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import loginReducer from 'containers/Login/reducers';
import forgottenPasswordReducer from 'containers/ForgottenPassword/reducers';
import registerReducer from 'containers/Register/reducers';
import editUserReducer from 'containers/EditUser/reducers';
import editGroupReducer from 'containers/EditGroup/reducers';
import usersReducer from 'containers/Users/reducers';
import groupsReducer from 'containers/Groups/reducers';

import SaveReducer from 'containers/Save/reducer';
import SaveHistoryReducer from 'containers/SaveHistory/reducer';
import SaveCreationReducer from 'containers/SaveCreation/reducer';
import RestoreReducer from 'containers/Restore/reducer';
import RestoreHistoryReducer from 'containers/RestoreHistory/reducer';
import RestoreCreationReducer from 'containers/RestoreCreation/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    login: loginReducer,
    forgottenPassword: forgottenPasswordReducer,
    register: registerReducer,
    editUser: editUserReducer,
    editGroup: editGroupReducer,
    users: usersReducer,
    groups: groupsReducer,
    save: SaveReducer,
    saveHistory: SaveHistoryReducer,
    restore: RestoreReducer,
    restoreHistory: RestoreHistoryReducer,
    restoreCreation: RestoreCreationReducer,
    saveCreation: SaveCreationReducer,
    ...asyncReducers,
  });
}
