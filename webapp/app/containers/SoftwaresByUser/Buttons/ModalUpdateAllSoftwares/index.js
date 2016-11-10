//
// Container modal update all softwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserUpdateAllSoftwaresModal } from 'components/SoftwaresByUser/Buttons/ModalUpdateAllSoftwares';
import {
  hideUpdateAllSoftwaresModal,
} from './actions';

function mapStateToProps(state) {
  return {
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserUpdateAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideUpdateAllSoftwaresModal: () => dispatch(hideUpdateAllSoftwaresModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserUpdateAllSoftwaresModal);
