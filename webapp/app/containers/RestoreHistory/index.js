//
// Container page save
//

import { connect } from 'react-redux';
import { getHistoryRestoresByUserRequest, showInstantRestoreModal, hideInstantRestoreModal } from './actions';
import { createRestoresRequest, setUserId, selectFiles, resetState } from 'containers/RestoreCreation/actions';
import { RestoreHistory } from 'components/RestoreHistory';

function mapStateToProps(state) {
  return {
    state: state.get('restoreHistory'),
    stateRestore: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHistoryRestoresByUserRequest: (username) => dispatch(getHistoryRestoresByUserRequest(username)),
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    resetStateCreationRestore: () => dispatch(resetState()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistory);
