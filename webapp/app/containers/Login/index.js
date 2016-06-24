//
// Container Login
//

import { connect } from 'react-redux';
import { loginRequest } from './actions';
import { Login } from 'components/Login';

function mapStateToProps(state) {
  return {
    state: state.get('login'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
