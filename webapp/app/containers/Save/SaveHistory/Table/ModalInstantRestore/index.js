//
// Container instant restore modal in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryInstantRestoreModal } from 'components/SaveHistory/Table/ModalInstantRestore';
import {
  hideInstantRestoreModal,
  createRestoreRequest,
  resetRestoreState,
} from 'containers/Save/SaveHistory/Table/actions';


function mapStateToProps(state) {
  return {
    state: state.get('saveHistory').get('SaveHistoryTableReducer'),
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
