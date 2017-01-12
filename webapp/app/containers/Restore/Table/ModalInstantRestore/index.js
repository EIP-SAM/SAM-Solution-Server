//
// Container modal instant restore table page restore
//

import { connect } from 'react-redux';
import RestoreInstantRestoreModal from 'components/Restore/Table/ModalInstantRestore';
import {
  createRestoresRequest,
  resetStateForm,
} from 'containers/RestoreCreation/Form/actions';
import { hideInstantRestoreModal } from './actions';

function mapStateToProps(state) {
  return {
    showModal: state.get('restore').get('InstantRestoreModalRestoreReducer').showModal,
    userId: state.get('restoreCreation').get('UsersRestoreCreationReducer').userId,
    saveId: state.get('restoreCreation').get('SavesRestoreCreationReducer').save.value,
    selectedFiles: state.get('restoreCreation').get('FilesRestoreCreationReducer').selectedFiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoresRequest: (userId, selectedFiles, saveId, redirect) => dispatch(createRestoresRequest(userId, selectedFiles, saveId, redirect)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreInstantRestoreModal);
