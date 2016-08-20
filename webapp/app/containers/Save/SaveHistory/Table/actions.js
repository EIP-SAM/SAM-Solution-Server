//
// Save History Table Actions
//
// To add a new Action:
//  1) Import your constant
//  2) Add a function like this:
//      export function yourAction(var) {
//          return { type: YOUR_ACTION_CONSTANT, var: var }
//      }
//

import { getHistorySavesByUserRequest } from 'containers/Save/SaveHistory/actions';
import request from 'utils/request';

import {
  SHOW_DELETION_SCHEDULED_SAVE_MODAL,
  SHOW_INSTANT_SAVE_MODAL,
  DELETE_SCHEDULED_SAVE_INFO,
  SHOW_INSTANT_RESTORE_MODAL,
  INSTANT_RESTORE,
  RESET_RESTORE_STATE,
} from './constants';

export function resetRestoreState() {
  return {
    type: RESET_RESTORE_STATE,
  };
}

export function showDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: true,
  };
}

export function hideDeletionScheduledSaveModal() {
  return {
    type: SHOW_DELETION_SCHEDULED_SAVE_MODAL,
    showDeletionModal: false,
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

export function deleteScheduledSaveInfo(saveId, saveScheduledId, username) {
  return {
    type: DELETE_SCHEDULED_SAVE_INFO,
    saveId,
    saveScheduledId,
    username,
  };
}

export function instantRestore(userId, files) {
  return {
    type: INSTANT_RESTORE,
    userId,
    files,
  };
}

export function cancelSave(saveId, saveScheduledId, username) {
  return function returnCancelSave(dispatch) {
    return request
    .post('/api/logged-in/cancel_save')
    .type('form')
    .send({
      saveScheduledId,
      saveId,
    })
    .end(() => {
      dispatch(getHistorySavesByUserRequest(username));
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
