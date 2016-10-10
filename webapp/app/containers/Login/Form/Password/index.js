//
// Container password form in login page
//

import { connect } from 'react-redux';
import { LoginFormPasswordFormGroup } from 'components/Login/Form/PasswordFormGroup';
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
)(LoginFormPasswordFormGroup);
