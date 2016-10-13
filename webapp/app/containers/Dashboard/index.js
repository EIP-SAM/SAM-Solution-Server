//
// Dashboard containers
//

import { connect } from 'react-redux';
import Dashboard from 'components/Dashboard';
import { getSavesNumbers } from './actions';

function mapStateToProps(state) {
  const userInfoObject = state.get('login').userInfo || {};

  return {
    saveNumbers: state.get('dashboard').saveNumbers,
    userInfo: userInfoObject,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesNumbers: (username) => dispatch(getSavesNumbers(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
