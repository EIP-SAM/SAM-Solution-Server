//
// Container modal of a instant restoration in page save
//

import { connect } from 'react-redux';
import { SaveInstantRestoreModal } from 'components/Save/Table/ModalInstantRestore';

import {
  hideInstantRestoreModal,
  createRestoreRequest,
  resetRestoreState,
} from './actions';

function mapStateToProps(state) {
  return {
    showInstantRestoreModal: state.get('save').get('SaveTableInstantRestoreModalReducer').showInstantRestoreModal,
    userId: state.get('save').get('SaveTableInstantRestoreModalReducer').userId,
    files: state.get('save').get('SaveTableInstantRestoreModalReducer').files,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoreRequest: (userId, files) => dispatch(createRestoreRequest(userId, files)),
    resetRestoreState: () => dispatch(resetRestoreState()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveInstantRestoreModal);
