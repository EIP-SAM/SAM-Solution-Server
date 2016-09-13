/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import logsReducer from 'containers/Logs/reducers';

import StatsReducer from 'containers/Stats/reducers';

import loginReducer from 'containers/Login/reducers';
import forgottenPasswordReducer from 'containers/ForgottenPassword/reducers';
import createUserReducer from 'containers/CreateUser/reducers';
import createGroupReducer from 'containers/CreateGroup/reducers';
import editUserReducer from 'containers/EditUser/reducers';
import editGroupReducer from 'containers/EditGroup/reducers';
import usersReducer from 'containers/Users/reducers';
import groupsReducer from 'containers/Groups/reducers';

import saveReducer from 'containers/Save/reducers';
import saveHistoryReducer from 'containers/SaveHistory/reducers';
import saveCreationReducer from 'containers/SaveCreation/Form/reducers';
import RestoreReducer from 'containers/Restore/reducers';
import RestoreHistoryReducer from 'containers/RestoreHistory/reducers';
import RestoreCreationReducer from 'containers/RestoreCreation/Form/reducers';

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
    logs: logsReducer,
    stats: StatsReducer,
    login: loginReducer,
    forgottenPassword: forgottenPasswordReducer,
    createUser: createUserReducer,
    createGroup: createGroupReducer,
    editUser: editUserReducer,
    editGroup: editGroupReducer,
    users: usersReducer,
    groups: groupsReducer,
    save: saveReducer,
    saveHistory: saveHistoryReducer,
    saveCreation: saveCreationReducer,
    restore: RestoreReducer,
    restoreHistory: RestoreHistoryReducer,
    restoreCreation: RestoreCreationReducer,
    ...asyncReducers,
  });
}
