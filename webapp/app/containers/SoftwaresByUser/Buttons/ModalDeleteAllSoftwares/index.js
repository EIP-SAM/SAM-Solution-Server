//
// Container software deletion modal Softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserDeleteAllSoftwaresModal } from 'components/SoftwaresByUser/Buttons/ModalDeleteAllSoftwares';
import {
  hideDeleteAllSoftwaresModal,
} from './actions';

function mapStateToProps(state) {
  return {
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserDeleteAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDeleteAllSoftwaresModal: () => dispatch(hideDeleteAllSoftwaresModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserDeleteAllSoftwaresModal);
