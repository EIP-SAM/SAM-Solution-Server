//
// Container modal update all softwares by user
//

import { connect } from 'react-redux';
import SoftwaresByUserUpdateAllSoftwaresModal from 'components/SoftwaresByUser/Buttons/ModalUpdateAllSoftwares';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
import { updateSoftwares } from 'containers/SoftwaresByUser/actions';
import { hideUpdateAllSoftwaresModal } from './actions';


function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserUpdateAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideUpdateAllSoftwaresModal: () => dispatch(hideUpdateAllSoftwaresModal()),
    updateSoftwares: (username, packages) => updateSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
    resetSelectedSoftware: () => dispatch(resetSelectedSoftware()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserUpdateAllSoftwaresModal);
