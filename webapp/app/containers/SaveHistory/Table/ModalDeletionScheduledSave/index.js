//
// Container deletion scheduled save modal in page history save by user
//

import { connect } from 'react-redux';
import SaveHistoryDeletionScheduledSaveModal from 'components/SaveHistory/Table/ModalDeletionScheduledSave';

import {
  hideDeletionScheduledSaveModal,
  cancelSave,
} from './actions';


function mapStateToProps(state) {
  return {
    showDeletionModal: state.get('saveHistory').get('SaveHistoryTableDeletionModalReducer').showDeletionModal,
    saveId: state.get('saveHistory').get('SaveHistoryTableDeletionModalReducer').saveId,
    saveScheduledId: state.get('saveHistory').get('SaveHistoryTableDeletionModalReducer').saveScheduledId,
    username: state.get('saveHistory').get('SaveHistoryTableDeletionModalReducer').username,
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
