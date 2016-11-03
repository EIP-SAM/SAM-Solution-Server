//
// Container software modal add all softwares by user by user
//

import { connect } from 'react-redux';
import { SoftwaresByUserAddAllSoftwaresModal } from 'components/SoftwaresByUser/Buttons/ModalAddAllSoftwares';
import {
  hideAddAllSoftwaresModal,
} from './actions';

function mapStateToProps(state) {
  return {
    selectedSoftwares: state.get('softwaresByUser').get('SoftwaresByUserTableReducers').get('SoftwaresByUserTableReducer').selectedSoftwares,
    showModal: state.get('softwaresByUser').get('SoftwaresByUserButtonsReducers').get('SoftwaresByUserAddAllSoftwaresModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideAddAllSoftwaresModal: () => dispatch(hideAddAllSoftwaresModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUserAddAllSoftwaresModal);
