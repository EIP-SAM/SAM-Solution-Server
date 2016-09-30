//
// Container password confirmation form create user
//

import { connect } from 'react-redux';
import { EditUserFormPasswordConfirmationFormGroup } from 'components/EditUser/Form/PasswordConfirmationFormGroup';
import { passwordConfirmationChange } from './actions';

function mapStateToProps(state) {
  return {
    passwordConfirmation: state.get('editUser').get('EditUserFormPasswordConfirmationReducer').passwordConfirmation,
    passwordConfirmationError: state.get('editUser').get('EditUserFormPasswordConfirmationReducer').passwordConfirmationError,
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
)(EditUserFormPasswordConfirmationFormGroup);
