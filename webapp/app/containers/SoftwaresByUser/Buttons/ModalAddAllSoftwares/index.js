//
// Container software modal add all softwares by user by user
//

import { connect } from 'react-redux';
import SoftwaresByUserAddAllSoftwaresModal from 'components/SoftwaresByUser/Buttons/ModalAddAllSoftwares';
import { installSoftwares } from 'containers/SoftwaresByUser/actions';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
import { hideAddAllSoftwaresModal } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserAddAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideAddAllSoftwaresModal: () => dispatch(hideAddAllSoftwaresModal()),
    installSoftwares: (username, packages) => installSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserAddAllSoftwaresModal);
