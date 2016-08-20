//
// Container modal of a instant restoration in page save
//

import { connect } from 'react-redux';
import { SaveInstantRestoreModal } from 'components/Save/Table/ModalInstantRestore';

import {
  hideInstantRestoreModal,
  createRestoreRequest,
  resetRestoreState,
} from 'containers/Save/Save/Table/actions';

function mapStateToProps(state) {
  return {
    state: state.get('save').get('SaveTableReducer'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideInstantRestoreModal: () => dispatch(hideInstantRestoreModal()),
    createRestoreRequest: (state) => dispatch(createRestoreRequest(state)),
    resetRestoreState: () => dispatch(resetRestoreState()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveInstantRestoreModal);
