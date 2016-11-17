//
// Container software deletion modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserDeleteSoftwareModal } from 'components/SoftwaresByUser/Table/ModalDeleteSoftware';
import { deleteSoftwares } from 'containers/SoftwaresByUser/actions';
import {
  hideDeleteSoftwareModal,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    softName: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').softName,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserDeleteSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDeleteSoftwareModal: () => dispatch(hideDeleteSoftwareModal()),
    deleteSoftwares: (username, packages) => deleteSoftwares(username, packages),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserDeleteSoftwareModal);
