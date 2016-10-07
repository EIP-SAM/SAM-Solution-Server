//
// Container password confirmation form create user
//

import { connect } from 'react-redux';
import { CreateUserFormPasswordConfirmation } from 'components/CreateUser/Form/PasswordConfirmation';
import { passwordConfirmationChange } from './actions';

function mapStateToProps(state) {
  return {
    passwordConfirmation: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmation,
    passwordConfirmationError: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmationError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    passwordConfirmationChange: (passwordConfirmation) => dispatch(passwordConfirmationChange(passwordConfirmation)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormPasswordConfirmation);
