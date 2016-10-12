//
// Container Login
//

import { connect } from 'react-redux';
import { loginRequest, onChangeData } from './actions';
import { Login } from 'components/Login';

function mapStateToProps(state) {
  return {
    state: state.get('login'),
    userInfo: state.get('login').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeData: (username, password) => dispatch(onChangeData(username, password)),
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
