//
// Container software deletion modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserDeleteSoftwareModal } from 'components/SoftwaresByUser/Table/ModalDeleteSoftware';
import {
  hideDeleteSoftwareModal,
} from './actions';

function mapStateToProps(state) {
  return {
    softName: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').softName,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserDeleteSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDeleteSoftwareModal: () => dispatch(hideDeleteSoftwareModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserDeleteSoftwareModal);
