//
// Container table sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserTable } from 'components/SoftwaresByUser/Table';
import { showAddSoftwareModal } from './ModalAddSoftware/actions';
import { showUpdateSoftwareModal } from './ModalUpdateSoftware/actions';
import { showDeleteSoftwareModal } from './ModalDeleteSoftware/actions';

function mapStateToProps(state) {
  return {
    softwares: state.get('softwaresByUser').get('SoftwaresByUserReducer').softwares,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showAddSoftwareModal: () => dispatch(showAddSoftwareModal()),
    showUpdateSoftwareModal: () => dispatch(showUpdateSoftwareModal()),
    showDeleteSoftwareModal: () => dispatch(showDeleteSoftwareModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserTable);
