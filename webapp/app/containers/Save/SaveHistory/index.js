//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';
import {
  listUsers,
  dateSave,
  timeSave,
  frequencySave,
  addAllFiles,
  resetStateSaving,
  createSave,
} from 'containers/Save/actions';

import {
  getHistorySavesByUserRequest,
  showDeletionScheduledSaveModal,
  hideDeletionScheduledSaveModal,
  cancelSave,
  showInstantSaveModal,
  hideInstantSaveModal,
  showInstantRestoreModal,
  hideInstantRestoreModal,
  deleteScheduledSaveInfo,
  instantRestore,
  createRestoreRequest,
  resetRestoreState,
  } from './actions';


function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    state: state.get('saveHistory'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: (users) => dispatch(listUsers(users)),
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
    deleteScheduledSaveInfo: (saveId, saveScheduledId, username) => dispatch(deleteScheduledSaveInfo(saveId, saveScheduledId, username)),
    showDeletionScheduledSaveModal: () => dispatch(showDeletionScheduledSaveModal()),
    hideDeletionScheduledSaveModal: () => dispatch(hideDeletionScheduledSaveModal()),
    cancelSave: (saveId, saveScheduledId, username) => dispatch(cancelSave(saveId, saveScheduledId, username)),
    showInstantSaveModal: () => dispatch(showInstantSaveModal()),
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (createSaveState, redirect) => dispatch(createSave(createSaveState, redirect)),
    resetStateSaving: () => dispatch(resetStateSaving()),
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    instantRestore: (userId, files) => dispatch(instantRestore(userId, files)),
    createRestoreRequest: (state) => dispatch(createRestoreRequest(state)),
    resetRestoreState: () => dispatch(resetRestoreState()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);