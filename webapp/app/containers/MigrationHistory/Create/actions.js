//
// Migration History Create actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';
import { browserHistory } from 'react-router';
import { getAllMigrationsRequest } from '../Table/actions';
import {
  MIGRATION_HISTORY_STATUS_CREATE_POPUP,
  MIGRATION_HISTORY_GET_ALL_IMAGES,
  MIGRATION_HISTORY_GET_ALL_USERS,
  MIGRATION_HISTORY_CREATE_SET_USER,
  MIGRATION_HISTORY_CREATE_SET_IMAGE,
  MIGRATION_HISTORY_CREATE_SET_TIME,
  MIGRATION_HISTORY_CREATE_SET_DATE,
  MIGRATION_HISTORY_SET_PASTEDATE_WARNING,
} from './constants';

export function showCreateMigrationPopup(isPoppedUp, migrationEdited) {
  return {
    type: MIGRATION_HISTORY_STATUS_CREATE_POPUP,
    isPoppedUp,
    migrationEdited,
  };
}

export function getAllImagesResult(images) {
  return {
    type: MIGRATION_HISTORY_GET_ALL_IMAGES,
    images,
  };
}

export function getAllImages() {
  return (dispatch) => (
    request
      .get('/api/logged-in/admin/images/')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(getAllImagesResult({ images: [] }));
        } else {
          dispatch(getAllImagesResult(res.body.images));
        }
      })
  );
}

export function getAllUsersResult(users) {
  return {
    type: MIGRATION_HISTORY_GET_ALL_USERS,
    users,
  };
}

export function getAllUsers() {
  return (dispatch) => (
    request
      .get('/api/logged-in/admin/users/')
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(getAllUsersResult({ users: [] }));
        } else {
          dispatch(getAllUsersResult(res.body.users));
        }
      })
  );
}

export function setSelectedUser(userId) {
  return {
    type: MIGRATION_HISTORY_CREATE_SET_USER,
    userId,
  };
}

export function setSelectedImage(imageId) {
  return {
    type: MIGRATION_HISTORY_CREATE_SET_IMAGE,
    imageId,
  };
}

export function createMigration(migrationObj) {
  return (dispatch) => (
    request
      .post('/api/logged-in/admin/migration/add')
      .send({ migrationObj })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(getAllMigrationsRequest());
        } else {
          dispatch(getAllMigrationsRequest());
        }
      })
  );
}

export function resetForm() {
  return (dispatch) => {
    dispatch(setSelectedUser(undefined));
    dispatch(setSelectedImage(undefined));
    dispatch(showCreateMigrationPopup(false, undefined));
    dispatch(setCreateTime(undefined));
    dispatch(setCreateDate(undefined));
    dispatch(setPasteDateWarning(false));
  };
}

export function editMigration(migrationObj) {
  return (dispatch) => (
    request
      .post(`/api/logged-in/admin/migration/${migrationObj.migrationId}/edit`)
      .send({ migrationObj })
      .end((err, res) => {
        if (err && res.statusCode === 401) {
          browserHistory.push('/login');
        }
        if (err || res.body.error) {
          dispatch(getAllMigrationsRequest());
        } else {
          dispatch(getAllMigrationsRequest());
        }
      })
  );
}


export function setCreateDate(date) {
  return {
    type: MIGRATION_HISTORY_CREATE_SET_DATE,
    date,
  };
}

export function setCreateTime(time) {
  return {
    type: MIGRATION_HISTORY_CREATE_SET_TIME,
    time,
  };
}

export function setPasteDateWarning(pasteDateWarning) {
  return {
    type: MIGRATION_HISTORY_SET_PASTEDATE_WARNING,
    pasteDateWarning,
  };
}
