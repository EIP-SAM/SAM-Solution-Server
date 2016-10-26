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
    name: state.get('softwaresByUser').get('SoftwaresByUserReducer').name,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserDeleteSoftwareModalReducer').showModal,
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
