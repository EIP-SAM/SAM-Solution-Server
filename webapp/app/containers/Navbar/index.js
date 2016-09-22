//
// Navbar
//

import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import { logoutRequest } from 'containers/Login/actions';

function mapDispatchToProps(dispatch) {
  return {
    logoutRequest: () => dispatch(logoutRequest()),
  };
}
export default connect(
  null,
  mapDispatchToProps,
)(Navbar);
