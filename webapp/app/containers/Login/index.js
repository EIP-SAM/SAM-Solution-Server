//
// Container Login
//

import { connect } from 'react-redux';
import { loginRequest } from './actions';
import { onChangeData } from './actions';
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
