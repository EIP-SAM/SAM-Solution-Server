//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';
import { listUsers, dateSave, timeSave, frequencySave, addAllFiles, createSave } from 'containers/SaveCreation/actions';
import { getHistorySavesByUserRequest, showDeletionScheduledSaveModal, hideDeletionScheduledSaveModal, cancelSave, showInstantSaveModal, hideInstantSaveModal } from './actions';


function mapStateToProps(state) {
  return {
    state: state.get('saveHistory'),
    createSaveState: state.get('saveCreation'),
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
    showDeletionScheduledSaveModal: () => dispatch(showDeletionScheduledSaveModal()),
    hideDeletionScheduledSaveModal: () => dispatch(hideDeletionScheduledSaveModal()),
    cancelSave: (saveId, saveScheduledId) => dispatch(cancelSave(saveId, saveScheduledId)),
    showInstantSaveModal: () => dispatch(showInstantSaveModal()),
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (createSaveState, redirect) => dispatch(createSave(createSaveState, redirect)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
