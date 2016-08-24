//
// Container instant restore modal in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryInstantRestoreModal } from 'components/SaveHistory/Table/ModalInstantRestore';
import {
  hideInstantRestoreModal,
  createRestoreRequest,
  resetRestoreState,
} from './actions';


function mapStateToProps(state) {
  return {
    showInstantRestoreModal: state.get('saveHistory').get('SaveHistoryTableInstantRestoreModalReducer').showInstantRestoreModal,
    userId: state.get('saveHistory').get('SaveHistoryTableInstantRestoreModalReducer').userId,
    files: state.get('saveHistory').get('SaveHistoryTableInstantRestoreModalReducer').files,
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
)(SaveHistoryInstantRestoreModal);
