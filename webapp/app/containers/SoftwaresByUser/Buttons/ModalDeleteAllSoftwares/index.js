//
// Container software deletion modal Softwares by user
//

import { connect } from 'react-redux';
import SoftwaresByUserDeleteAllSoftwaresModal from 'components/SoftwaresByUser/Buttons/ModalDeleteAllSoftwares';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
import { deleteSoftwares } from 'containers/SoftwaresByUser/actions';
import { hideDeleteAllSoftwaresModal } from './actions';


function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserDeleteAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDeleteAllSoftwaresModal: () => dispatch(hideDeleteAllSoftwaresModal()),
    deleteSoftwares: (username, packages) => deleteSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
    resetSelectedSoftware: () => dispatch(resetSelectedSoftware()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserDeleteAllSoftwaresModal);
