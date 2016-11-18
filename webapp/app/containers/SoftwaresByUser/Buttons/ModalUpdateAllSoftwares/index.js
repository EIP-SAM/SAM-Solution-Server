//
// Container modal update all softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserUpdateAllSoftwaresModal } from 'components/SoftwaresByUser/Buttons/ModalUpdateAllSoftwares';
import { installSoftwares } from 'containers/SoftwaresByUser/actions';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
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
    installSoftwares: (username, packages) => installSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserUpdateAllSoftwaresModal);
