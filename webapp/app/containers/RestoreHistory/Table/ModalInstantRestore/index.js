//
// Container instant restore modal table page restore history
//

import { connect } from 'react-redux';
import { resetStateForm } from 'containers/RestoreCreation/Form/actions';
import RestoreHistoryInstantRestoreModal from 'components/RestoreHistory/Table/ModalInstantRestore';
import {
  hideInstantRestoreModal,
  createRestoreActionRestoreHistory,
} from './actions';

function mapStateToProps(state) {
  return {
    showModal: state.get('restoreHistory').get('InstantRestoreModalRestoreHistoryReducer').showModal,
    userId: state.get('restoreCreation').get('UsersRestoreCreationReducer').userId,
    selectedFiles: state.get('restoreCreation').get('FilesRestoreCreationReducer').selectedFiles,
    save: state.get('restoreCreation').get('SavesRestoreCreationReducer').save,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoreActionRestoreHistory: (username, userId, selectedFiles, saveId) => dispatch(createRestoreActionRestoreHistory(username, userId, selectedFiles, saveId)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistoryInstantRestoreModal);
