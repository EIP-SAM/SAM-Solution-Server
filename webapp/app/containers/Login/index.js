//
// Container Login
//

import { connect } from 'react-redux';
import { loginRequest, onChangeData, logoutRequest, userIsLogin } from './actions';
import { Login } from 'components/Login';
console.log('zamra', userIsLogin);
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
    onLoginPage: (onLogin) => dispatch(userIsLogin(onLogin)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
