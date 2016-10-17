//
// Container password form in login page
//

import { connect } from 'react-redux';
import { LoginFormPassword } from 'components/Login/Form/Password';
import { passwordChange } from './actions';

function mapStateToProps(state) {
  return {
    password: state.get('login').get('LoginFormPasswordReducer').password,
    passwordError: state.get('login').get('LoginFormPasswordReducer').passwordError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    passwordChange: (password) => dispatch(passwordChange(password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormPassword);
