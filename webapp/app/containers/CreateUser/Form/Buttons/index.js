//
// Container buttons form create user
//

import { connect } from 'react-redux';
import { CreateUserFormButtons } from 'components/CreateUser/Form/Buttons';
import { createUserRequest } from 'containers/CreateUser/Form/actions';
import { usernameErrorMsg } from 'containers/CreateUser/Form/Username/actions';
import { emailErrorMsg } from 'containers/CreateUser/Form/Email/actions';
import { passwordErrorMsg } from 'containers/CreateUser/Form/Password/actions';
import { passwordConfirmationErrorMsg } from 'containers/CreateUser/Form/PasswordConfirmation/actions';

function mapStateToProps(state) {
  return {
    username: state.get('createUser').get('CreateUserFormUsernameReducer').username,
    email: state.get('createUser').get('CreateUserFormEmailReducer').email,
    password: state.get('createUser').get('CreateUserFormPasswordReducer').password,
    passwordConfirmation: state.get('createUser').get('CreateUserFormPasswordConfirmationReducer').passwordConfirmation,
    selectedGroup: state.get('createUser').get('CreateUserFormGroupsReducer').selectedGroup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUserRequest: (username, email, password, passwordConfirmation, selectedGroup) => dispatch(createUserRequest(username, email, password, passwordConfirmation, selectedGroup)),
    usernameErrorMsg: usernameError => dispatch(usernameErrorMsg(usernameError)),
    emailErrorMsg: emailError => dispatch(emailErrorMsg(emailError)),
    passwordErrorMsg: passwordError => dispatch(passwordErrorMsg(passwordError)),
    passwordConfirmationErrorMsg: passwordConfirmationError => dispatch(passwordConfirmationErrorMsg(passwordConfirmationError)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormButtons);
