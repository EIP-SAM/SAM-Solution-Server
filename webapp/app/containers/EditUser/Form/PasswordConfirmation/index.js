//
// Container password confirmation form edit user
//

import { connect } from 'react-redux';
import { EditUserFormPasswordConfirmation } from 'components/EditUser/Form/PasswordConfirmation';
import { checkPasswordConfirmation } from './actions';

function mapStateToProps(state) {
  return {
    password: state.get('editUser').get('EditUserFormPasswordReducer').password,
    passwordConfirmation: state.get('editUser').get('EditUserFormPasswordConfirmationReducer').passwordConfirmation,
    passwordConfirmationError: state.get('editUser').get('EditUserFormPasswordConfirmationReducer').passwordConfirmationError,
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
)(EditUserFormPasswordConfirmation);
