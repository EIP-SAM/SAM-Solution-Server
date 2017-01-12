//
// Container buttons in login page
//

import { connect } from 'react-redux';
import LoginFormButtons from 'components/Login/Form/Buttons';
import { loginRequest } from 'containers/Login/Form/actions';
import { usernameErrorMsg } from 'containers/Login/Form/Username/actions';
import { passwordErrorMsg } from 'containers/Login/Form/Password/actions';

function mapStateToProps(state) {
  return {
    username: state.get('login').get('LoginFormUsernameReducer').username,
    password: state.get('login').get('LoginFormPasswordReducer').password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    usernameErrorMsg: usernameError => dispatch(usernameErrorMsg(usernameError)),
    passwordErrorMsg: passwordError => dispatch(passwordErrorMsg(passwordError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormButtons);
