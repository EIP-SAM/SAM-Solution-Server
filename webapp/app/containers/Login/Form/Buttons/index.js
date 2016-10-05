//
// Container buttons in login page
//

import { connect } from 'react-redux';
import { LoginFormButtons } from 'components/EditUser/Form/Buttons';
import { loginRequest } from 'containers/EditUser/Form/actions';
import { usernameErrorMsg } from 'containers/EditUser/Form/Username/actions';
import { passwordErrorMsg } from 'containers/EditUser/Form/Password/actions';

function mapStateToProps(state) {
  return {
    username: state.get('login').get('LoginFormUsernameReducer').username,
    password: state.get('login').get('LoginFormPasswordReducer').password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    usernameErrorMsg: (usernameError) => dispatch(usernameErrorMsg(usernameError)),
    passwordErrorMsg: (passwordError) => dispatch(passwordErrorMsg(passwordError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormButtons);
