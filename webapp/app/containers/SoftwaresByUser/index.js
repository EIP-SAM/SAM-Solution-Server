//
// Container sofwares by user
//

import { connect } from 'react-redux';
import SoftwaresByUser from 'components/SoftwaresByUser';
import { resetStateTable } from './Table/actions';
import {
  getInstalledSoftwaresRequest,
  getUsername,
  resetAlert,
  resetSoftwares,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('softwaresByUser').get('SoftwaresByUserReducer').username,
    alerts: state.get('softwaresByUser').get('SoftwaresByUserReducer').alerts,
    displayAlert: state.get('softwaresByUser').get('SoftwaresByUserReducer').displayAlert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsername: username => dispatch(getUsername(username)),
    getInstalledSoftwaresRequest: username => getInstalledSoftwaresRequest(username),
    resetAlert: () => dispatch(resetAlert()),
    resetStateTable: () => dispatch(resetStateTable()),
    resetSoftwares: () => dispatch(resetSoftwares()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwaresByUser);
