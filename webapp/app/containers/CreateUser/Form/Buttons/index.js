//
// Container buttons form create user
//

import { connect } from 'react-redux';
import { CreateUserFormButtons } from 'components/CreateUser/Form/Buttons';
import { createUserRequest } from 'containers/CreateUser/Form/actions';

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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormButtons);
