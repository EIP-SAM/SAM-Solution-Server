//
// Container instant restore modal table page restore history
//

import { connect } from 'react-redux';
import { hideInstantRestoreModal } from './actions';
import { createRestoresRequest, resetState } from 'containers/RestoreCreation/Form/actions';
import { RestoreHistoryInstantRestoreModal } from 'components/RestoreHistory/Table/ModalInstantRestore';

function mapStateToProps(state) {
  return {
    showModal: state.get('restoreHistory').get('InstantRestoreModalRestoreHistoryReducer').showModal,
    stateRestore: state.get('restoreCreation'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoresRequest: (state, redirect) => dispatch(createRestoresRequest(state, redirect)),
    resetStateCreationRestore: () => dispatch(resetState()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistoryInstantRestoreModal);
