//
// Container table in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryTable } from 'components/SaveHistory/Table';
import {
  listUsers,
  dateSave,
  timeSave,
  frequencySave,
  addAllFiles,
} from 'containers/Save/actions';

import {
  showDeletionScheduledSaveModal,
  showInstantSaveModal,
  showInstantRestoreModal,
  deleteScheduledSaveInfo,
  instantRestore,
} from './actions';


function mapStateToProps(state) {
  return {
    saves: state.get('saveHistory').get('SaveHistoryReducer').saves,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listUsers: (users) => dispatch(listUsers(users)),
    dateSave: (date) => dispatch(dateSave(date)),
    timeSave: (time) => dispatch(timeSave(time)),
    frequencySave: (frequency) => dispatch(frequencySave(frequency)),
    addAllFiles: (files) => dispatch(addAllFiles(files)),
    deleteScheduledSaveInfo: (saveId, saveScheduledId, username) => dispatch(deleteScheduledSaveInfo(saveId, saveScheduledId, username)),
    showDeletionScheduledSaveModal: () => dispatch(showDeletionScheduledSaveModal()),
    showInstantSaveModal: () => dispatch(showInstantSaveModal()),
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    instantRestore: (userId, files) => dispatch(instantRestore(userId, files)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistoryTable);
