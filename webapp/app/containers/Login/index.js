//
// Container Login
//

import { connect } from 'react-redux';
import { loginRequest, onChangeData, logoutRequest } from './actions';
import { Login } from 'components/Login';

function mapStateToProps(state) {
  return {
    state: state.get('login'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (username, password) => dispatch(onChangeData(username, password)),
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    logoutRequest: () => dispatch(logoutRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
