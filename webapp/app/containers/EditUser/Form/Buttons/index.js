//
// Container buttons form edit user
//

import { connect } from 'react-redux';
import EditUserFormButtons from 'components/EditUser/Form/Buttons';
import { editUserRequest } from 'containers/EditUser/Form/actions';
import { usernameErrorMsg } from 'containers/EditUser/Form/Username/actions';
import { emailErrorMsg } from 'containers/EditUser/Form/Email/actions';

function mapStateToProps(state) {
  return {
    userId: state.get('editUser').get('EditUserFormReducer').userId,
    username: state.get('editUser').get('EditUserFormUsernameReducer').username,
    email: state.get('editUser').get('EditUserFormEmailReducer').email,
    password: state.get('editUser').get('EditUserFormPasswordReducer').password,
    passwordConfirmation: state.get('editUser').get('EditUserFormPasswordConfirmationReducer').passwordConfirmation,
    userGroups: state.get('editUser').get('EditUserFormGroupsReducer').userGroups,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editUserRequest: (userId, username, email, password, passwordConfirmation, userGroups) => dispatch(editUserRequest(userId, username, email, password, passwordConfirmation, userGroups)),
    usernameErrorMsg: usernameError => dispatch(usernameErrorMsg(usernameError)),
    emailErrorMsg: emailError => dispatch(emailErrorMsg(emailError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormButtons);
