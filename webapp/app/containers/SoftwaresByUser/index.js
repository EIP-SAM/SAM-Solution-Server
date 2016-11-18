//
// Container sofwares by user
//

import { connect } from 'react-redux';
import { SoftwaresByUser } from 'components/SoftwaresByUser';
import { resetStateTable } from './Table/actions';
import {
  getInstalledSoftwaresRequest,
  getUsername,
  resetAlert,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    softName: state.get('softwaresByUser').get('SoftwaresByUserReducer').softName,
    alertMsg: state.get('softwaresByUser').get('SoftwaresByUserReducer').alertMsg,
    typeAlert: state.get('softwaresByUser').get('SoftwaresByUserReducer').typeAlert,
    displayAlert: state.get('softwaresByUser').get('SoftwaresByUserReducer').displayAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsername: (username) => dispatch(getUsername(username)),
    getInstalledSoftwaresRequest: (username) => getInstalledSoftwaresRequest(username),
    resetAlert: () => dispatch(resetAlert()),
    resetStateTable: () => dispatch(resetStateTable()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUser);
