//
// Container software deletion modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserDeleteAllSoftwaresModal } from 'components/SoftwaresByUser/Buttons/ModalDeleteAllSoftwares';
import { installSoftwares } from 'containers/SoftwaresByUser/actions';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
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
    installSoftwares: (username, packages) => installSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserDeleteAllSoftwaresModal);
