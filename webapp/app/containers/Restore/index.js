//
// Container page save
//

import { connect } from 'react-redux';
import { getVisibilityFilter, getRestoresRequest } from './actions';
import { showInstantRestoreModal, hideInstantRestoreModal } from 'containers/RestoreHistory/actions';
import { createRestoresRequest, setUserId, selectFiles, resetState } from 'containers/RestoreCreation/actions';
import { Restore } from 'components/Restore';

function mapStateToProps(state) {
  return {
    state: state.get('restore'),
    historyState: state.get('restoreHistory'),
    creationState: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRestoresRequest: () => dispatch(getRestoresRequest()),
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    resetStateCreationRestore: () => dispatch(resetState()),
    getVisibilityFilter: (typeUser) => dispatch(getVisibilityFilter(typeUser)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restore);
