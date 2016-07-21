//
// Navbar
//

import { connect } from 'react-redux';
import Navbar from 'components/Navbar';

function mapStateToProps(state) {
  return {
    username: state.get('login'),
  };
}

export default connect(
  mapStateToProps,
  null,
)(Navbar);
