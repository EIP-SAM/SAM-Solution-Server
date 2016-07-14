//
// Container page history save by user
//

import { connect } from 'react-redux';
import { SaveHistory } from 'components/SaveHistory';
import { dateSave, timeSave, frequencySave, addAllFiles } from 'containers/SaveCreation/actions';
import { getHistorySavesByUserRequest, showDeletionScheduledSaveModal, hideDeletionScheduledSaveModal, cancelSave } from './actions';


function mapStateToProps(state) {
  return {
    state: state.get('saveHistory'),
    createSave: state.get('saveCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistorySavesByUserRequest: (username) => dispatch(getHistorySavesByUserRequest(username)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
    showDeletionScheduledSaveModal: () => dispatch(showDeletionScheduledSaveModal()),
    hideDeletionScheduledSaveModal: () => dispatch(hideDeletionScheduledSaveModal()),
    cancelSave: (saveId, saveScheduledId) => dispatch(cancelSave(saveId, saveScheduledId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistory);
