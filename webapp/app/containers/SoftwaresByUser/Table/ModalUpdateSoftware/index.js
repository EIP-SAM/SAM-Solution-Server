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
    softName: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').softName,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserUpdateSoftwareModalReducer').showModal,
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
