//
// Container table in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryTable } from 'components/SaveHistory/Table';
import { listUsers } from 'containers/SaveCreation/Form/Users/actions';
import { dateSave } from 'containers/SaveCreation/Form/Date/actions';
import { timeSave } from 'containers/SaveCreation/Form/Time/actions';
import { frequencySave } from 'containers/SaveCreation/Form/Frequency/actions';
import { addAllFiles } from 'containers/SaveCreation/Form/Files/actions';
import {
  showDeletionScheduledSaveModal,
  deleteScheduledSaveInfo,
} from './ModalDeletionScheduledSave/actions';

import {
  showInstantRestoreModal,
  instantRestore,
} from './ModalInstantRestore/actions';

import {
  showInstantSaveModal,
} from './ModalInstantSave/actions';


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
    instantRestore: (userId, files, saveId) => dispatch(instantRestore(userId, files, saveId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistoryTable);
