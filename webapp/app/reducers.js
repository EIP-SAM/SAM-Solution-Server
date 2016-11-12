/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import logsReducer from 'containers/Logs/reducers';
import StatsReducer from 'containers/Stats/reducers';
import dashboardReducer from 'containers/Dashboard/reducers';
import forgottenPasswordReducer from 'containers/ForgottenPassword/Form/Email/reducer';
import appReducer from 'containers/App/reducer';
import loginReducer from 'containers/Login/Form/reducers';
import createUserReducer from 'containers/CreateUser/Form/reducers';
import createGroupReducer from 'containers/CreateGroup/Form/reducers';
import editUserReducer from 'containers/EditUser/Form/reducers';
import editGroupReducer from 'containers/EditGroup/Form/reducers';
import usersReducer from 'containers/Users/reducers';
import groupsReducer from 'containers/Groups/reducers';
import saveReducer from 'containers/Save/reducers';
import saveHistoryReducer from 'containers/SaveHistory/reducers';
import saveCreationReducer from 'containers/SaveCreation/Form/reducers';
import RestoreReducer from 'containers/Restore/reducers';
import RestoreHistoryReducer from 'containers/RestoreHistory/reducers';
import RestoreCreationReducer from 'containers/RestoreCreation/Form/reducers';
import softwaresByUserReducer from 'containers/SoftwaresByUser/reducers';
import migrationHistoryReducer from 'containers/MigrationHistory/reducers';
import SoftwareReducer from 'containers/Software/reducers';

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
    app: appReducer,
    logs: logsReducer,
    stats: StatsReducer,
    dashboard: dashboardReducer,
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
    softwaresByUser: softwaresByUserReducer,
    migrationHistory: migrationHistoryReducer,
    software: SoftwareReducer,
    ...asyncReducers,
  });
}
