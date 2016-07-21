//
// Save Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import request from 'utils/request';

import {
  GET_SAVES,
  GET_USERS,
  SHOW_INSTANT_SAVE_MODAL,
  SHOW_INSTANT_RESTORE_MODAL,
  INSTANT_RESTORE,
  RESET_RESTORE_STATE,
} from './constants';

export function resetRestoreState() {
  return {
    type: RESET_RESTORE_STATE,
  };
}

export function getSaves(saves) {
  return {
    type: GET_SAVES,
    saves,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function showInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: true,
  };
}

export function hideInstantSaveModal() {
  return {
    type: SHOW_INSTANT_SAVE_MODAL,
    showInstantSaveModal: false,
  };
}

export function showInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: true,
  };
}

export function hideInstantRestoreModal() {
  return {
    type: SHOW_INSTANT_RESTORE_MODAL,
    showInstantRestoreModal: false,
  };
}

export function instantRestore(userId, files) {
  return {
    type: INSTANT_RESTORE,
    userId,
    files,
  };
}

export function getSavesRequest() {
  return function returnGetSavesRequest(dispatch) {
    return request
      .get('/save')
      .end((err, res) => {
        dispatch(getSaves(res.body));
        const users = [];
        for (const user of res.body) {
          users.push({ id: user.id, name: user.name });
        }
        dispatch(getUsers(users));
      });
  };
}

export function createRestoreRequest(state) {
  return function returnCreateRestoreRequest(dispatch) {
    return request
      .post('/create_restore')
      .type('form')
      .send({
        userId: state.userId,
        files: state.files,
      })
      .end(() => {
        dispatch(resetRestoreState());
      });
  };
}
