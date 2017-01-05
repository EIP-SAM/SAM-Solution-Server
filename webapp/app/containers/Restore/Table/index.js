//
// Container table page restore
//

import { connect } from 'react-redux';
import RestoreTable from 'components/Restore/Table';
import { showInstantRestoreModal } from 'containers/Restore/Table/ModalInstantRestore/actions';
import { setUserId } from 'containers/RestoreCreation/Form/User/actions';
import { selectFiles } from 'containers/RestoreCreation/Form/Files/actions';
import { selectSave } from 'containers/RestoreCreation/Form/Saves/actions';

function mapStateToProps(state) {
  return {
    restores: state.get('restore').get('RestoreReducer').restores,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showInstantRestoreModal: () => dispatch(showInstantRestoreModal()),
    selectFiles: selectedFiles => dispatch(selectFiles(selectedFiles)),
    setUserId: userId => dispatch(setUserId(userId)),
    selectSave: save => dispatch(selectSave(save)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestoreTable);
