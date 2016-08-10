//
// Container page save
//

import { connect } from 'react-redux';
import { Save } from 'components/Save';
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
  getUsers,
  getSavesRequest,
  showInstantSaveModal,
  hideInstantSaveModal,
  showInstantRestoreModal,
  hideInstantRestoreModal,
  instantRestore,
  createRestoreRequest,
  resetRestoreState,
 } from './actions';

function mapStateToProps(state) {
  return {
    saving: state.get('saving'),
    state: state.get('save'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (users) => dispatch(getUsers(users)),
    listUsers: (users) => dispatch(listUsers(users)),
    getSavesRequest: () => dispatch(getSavesRequest()),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
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
)(Save);
