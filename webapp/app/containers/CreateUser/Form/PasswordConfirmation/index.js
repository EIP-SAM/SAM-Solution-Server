//
// Container password confirmation form create user
//

import { connect } from 'react-redux';
import { CreateUserFormPasswordConfirmationFormGroup } from 'components/CreateUser/Form/PasswordConfirmationFormGroup';
import { passwordConfirmationChange } from './actions';

function mapStateToProps(state) {
  return {
    passwordConfirmation: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmation,
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
)(CreateUserFormPasswordConfirmationFormGroup);
