//
// Container sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserButtons } from 'components/SoftwaresByUser/Buttons';
import { showAddAllSoftwaresModal } from './ModalAddAllSoftwares/actions';
import { showUpdateAllSoftwaresModal } from './ModalUpdateAllSoftwares/actions';
import { showDeleteAllSoftwaresModal } from './ModalDeleteAllSoftwares/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showAddAllSoftwaresModal: () => dispatch(showAddAllSoftwaresModal()),
    showUpdateAllSoftwaresModal: () => dispatch(showUpdateAllSoftwaresModal()),
    showDeleteAllSoftwaresModal: () => dispatch(showDeleteAllSoftwaresModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserButtons);
