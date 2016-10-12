//
// Container password form edit user
//

import { connect } from 'react-redux';
import { EditUserFormPassword } from 'components/EditUser/Form/Password';
import { passwordChange } from './actions';

function mapStateToProps(state) {
  return {
    password: state.get('editUser').get('EditUserFormPasswordReducer').password,
    passwordError: state.get('editUser').get('EditUserFormPasswordReducer').passwordError,
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
)(EditUserFormPassword);
