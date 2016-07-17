//
// Container page save
//

import { connect } from 'react-redux';
import { listUsers, dateSave, timeSave, frequencySave, addAllFiles, createSave } from 'containers/SaveCreation/actions';
import { getSavesRequest, showInstantSaveModal, hideInstantSaveModal } from './actions';
import { Save } from 'components/Save';

function mapStateToProps(state) {
  return {
    state: state.get('save'),
    createSaveState: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: (users) => dispatch(listUsers(users)),
    getSavesRequest: () => dispatch(getSavesRequest()),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
    showInstantSaveModal: () => dispatch(showInstantSaveModal()),
    hideInstantSaveModal: () => dispatch(hideInstantSaveModal()),
    createSave: (createSaveState, redirect) => dispatch(createSave(createSaveState, redirect)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);
