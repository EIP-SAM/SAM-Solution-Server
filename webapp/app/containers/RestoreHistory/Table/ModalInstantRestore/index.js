//
// Container instant restore modal table page restore history
//

import { connect } from 'react-redux';
import { hideInstantRestoreModal } from './actions';
import { createRestoresRequest, resetStateForm } from 'containers/RestoreCreation/Form/actions';
import { RestoreHistoryInstantRestoreModal } from 'components/RestoreHistory/Table/ModalInstantRestore';

function mapStateToProps(state) {
  return {
    showModal: state.get('restoreHistory').get('InstantRestoreModalRestoreHistoryReducer').showModal,
    userId: state.get('restoreCreation').get('UsersRestoreCreationReducer').userId,
    selectedFiles: state.get('restoreCreation').get('FilesRestoreCreationReducer').selectedFiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    resetStateForm: () => dispatch(resetStateForm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistoryInstantRestoreModal);
