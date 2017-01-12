//
// Container password form create user
//

import { connect } from 'react-redux';
import CreateUserFormPassword from 'components/CreateUser/Form/Password';
import { passwordChange } from './actions';

function mapStateToProps(state) {
  return {
    password: state.get('createUser').get('CreateUserFormPasswordReducer').password,
    passwordError: state.get('createUser').get('CreateUserFormPasswordReducer').passwordError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    passwordChange: password => dispatch(passwordChange(password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormPassword);
