//
// Container modal instant restore table page restore
//

import { connect } from 'react-redux';
import { RestoreInstantRestoreModal } from 'components/Restore/Table/ModalInstantRestore';
import { hideInstantRestoreModal } from './actions';
import {
  createRestoresRequest,
  resetState,
} from 'containers/RestoreCreation/Form/actions';

function mapStateToProps(state) {
  return {
    showModal: state.get('restore').get('InstantRestoreModalRestoreReducer').showModal,
    creationState: state.get('restoreCreation'),
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
)(RestoreInstantRestoreModal);
