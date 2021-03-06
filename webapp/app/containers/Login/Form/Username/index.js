//
// Container username form in login page
//

import { connect } from 'react-redux';
import LoginFormUsername from 'components/Login/Form/Username';
import { usernameChange } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('login').get('LoginFormUsernameReducer').username,
    usernameError: state.get('login').get('LoginFormUsernameReducer').usernameError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    usernameChange: username => dispatch(usernameChange(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormUsername);
