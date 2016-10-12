//
// Container password confirmation form create user
//

import { connect } from 'react-redux';
import { EditUserFormPasswordConfirmation } from 'components/EditUser/Form/PasswordConfirmation';
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
)(EditUserFormPasswordConfirmation);
