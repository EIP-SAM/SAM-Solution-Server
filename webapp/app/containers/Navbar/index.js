//
// Navbar
//

import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import { logoutRequest } from 'containers/App/actions';

function mapStateToProps(state) {
  return {
    userInfo: state.get('app').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutRequest: () => dispatch(logoutRequest()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
