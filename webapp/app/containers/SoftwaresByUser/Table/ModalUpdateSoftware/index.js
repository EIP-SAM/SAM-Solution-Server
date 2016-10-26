//
// Container software add modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserUpdateSoftwareModal } from 'components/SoftwaresByUser/Table/ModalUpdateSoftware';
import {
  hideUpdateSoftwareModal,
} from './actions';

function mapStateToProps(state) {
  return {
    name: state.get('softwaresByUser').get('SoftwaresByUserReducer').name,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserUpdateSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideUpdateSoftwareModal: () => dispatch(hideUpdateSoftwareModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserUpdateSoftwareModal);
