//
// Container software add modal Softwares by user
//

import { connect } from 'react-redux';
import SoftwaresByUserUpdateSoftwareModal from 'components/SoftwaresByUser/Table/ModalUpdateSoftware';
import { updateSoftwares } from 'containers/SoftwaresByUser/actions';
import { resetStateTable } from 'containers/SoftwaresByUser/Table/actions';
import {
  hideUpdateSoftwareModal,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    softName: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').softName,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserUpdateSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideUpdateSoftwareModal: () => dispatch(hideUpdateSoftwareModal()),
    updateSoftwares: (username, packages) => updateSoftwares(username, packages),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserUpdateSoftwareModal);
