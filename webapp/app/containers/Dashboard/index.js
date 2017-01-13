//
// Dashboard containers
//

import { connect } from 'react-redux';
import Dashboard from 'components/Dashboard';
import {
  getSavesNumbers,
  getRestoresNumbers,
 } from './actions';

function mapStateToProps(state) {
  return {
    saveNumbers: state.get('dashboard').saveNumbers,
    restoreNumbers: state.get('dashboard').restoreNumbers,
    currentUserName: state.get('app').userInfo.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesNumbers: username => dispatch(getSavesNumbers(username)),
    getRestoresNumbers: username => dispatch(getRestoresNumbers(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
