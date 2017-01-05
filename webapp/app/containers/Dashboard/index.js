//
// Dashboard containers
//

import { connect } from 'react-redux';
import Dashboard from 'components/Dashboard';
import {
  getSavesNumbers,
  getRestoresNumbers,
  getDeamonUsersConnected,
 } from './actions';

function mapStateToProps(state) {
  const userInfoObject = state.get('app').userInfo || {};

  return {
    saveNumbers: state.get('dashboard').saveNumbers,
    restoreNumbers: state.get('dashboard').restoreNumbers,
    deamonUsersConnected: state.get('dashboard').deamonUsersConnected,
    userInfo: userInfoObject,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesNumbers: username => dispatch(getSavesNumbers(username)),
    getRestoresNumbers: username => dispatch(getRestoresNumbers(username)),
    getDeamonUsersConnected: () => dispatch(getDeamonUsersConnected()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
