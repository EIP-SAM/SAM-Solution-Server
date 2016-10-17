//
// Container password confirmation form create user
//

import { connect } from 'react-redux';
import { CreateUserFormPasswordConfirmation } from 'components/CreateUser/Form/PasswordConfirmation';
import { checkPasswordConfirmation } from './actions';

function mapStateToProps(state) {
  return {
    password: state.get('createUser').get('CreateUserFormPasswordReducer').password,
    passwordConfirmation: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmation,
    passwordConfirmationError: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmationError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkPasswordConfirmation: (password, passwordConfirmation) => dispatch(checkPasswordConfirmation(password, passwordConfirmation)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormPasswordConfirmation);
