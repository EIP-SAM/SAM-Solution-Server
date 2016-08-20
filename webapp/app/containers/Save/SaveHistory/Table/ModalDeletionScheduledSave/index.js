//
// Container deletion scheduled save modal in page history save by user
//

import { connect } from 'react-redux';
import { SaveHistoryDeletionScheduledSaveModal } from 'components/SaveHistory/Table/ModalDeletionScheduledSave';

import {
  hideDeletionScheduledSaveModal,
  cancelSave,
} from 'containers/Save/SaveHistory/Table/actions';


function mapStateToProps(state) {
  return {
    state: state.get('saveHistory').get('SaveHistoryTableReducer'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDeletionScheduledSaveModal: () => dispatch(hideDeletionScheduledSaveModal()),
    cancelSave: (saveId, saveScheduledId, username) => dispatch(cancelSave(saveId, saveScheduledId, username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHistoryDeletionScheduledSaveModal);
