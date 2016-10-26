//
// Container software add modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserAddSoftwareModal } from 'components/SoftwaresByUser/Table/ModalAddSoftware';
import {
  hideAddSoftwareModal,
} from './actions';

function mapStateToProps(state) {
  return {
    name: state.get('softwaresByUser').get('SoftwaresByUserReducer').name,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserAddSoftwareModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideAddSoftwareModal: () => dispatch(hideAddSoftwareModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserAddSoftwareModal);
