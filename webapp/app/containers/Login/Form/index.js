//
// Container form Login
//

import { connect } from 'react-redux';
import { LoginForm } from 'components/Login/Form';
import { loginRequest } from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) => dispatch(getUserRequest(username, password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
