//
// Container table page restore history
//

import { connect } from 'react-redux';
import { showInstantRestoreModal } from 'containers/RestoreHistory/Table/ModalInstantRestore/actions';
import { setUserId } from 'containers/RestoreCreation/Form/Users/actions';
import { selectFiles } from 'containers/RestoreCreation/Form/Files/actions';
import { RestoreHistoryTable } from 'components/RestoreHistory/Table';
import { selectSave } from 'containers/RestoreCreation/Form/Saves/actions';

function mapStateToProps(state) {
  return {
    restores: state.get('restoreHistory').get('RestoreHistoryReducer').restores,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    selectFiles: (selectedFiles) => dispatch(selectFiles(selectedFiles)),
    setUserId: (userId) => dispatch(setUserId(userId)),
    selectSave: (save) => dispatch(selectSave(save)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreHistoryTable);
