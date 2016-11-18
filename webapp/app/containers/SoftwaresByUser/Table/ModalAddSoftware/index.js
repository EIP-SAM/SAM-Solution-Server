//
// Container software add modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserAddSoftwareModal } from 'components/SoftwaresByUser/Table/ModalAddSoftware';
import { installSoftwares } from 'containers/SoftwaresByUser/actions';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
import { hideAddSoftwareModal } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    softName: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').softName,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserAddSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideAddSoftwareModal: () => dispatch(hideAddSoftwareModal()),
    installSoftwares: (username, packages) => installSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserAddSoftwareModal);
