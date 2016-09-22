//
// Container username form create user
//

import { connect } from 'react-redux';
import { CreateUserFormUsernameFormGroup } from 'components/CreateUser/Form/UsernameFormGroup';
import { usernameChange } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('createUser').get('CreateUserFormUsernameReducer').username,
    usernameError: state.get('createUser').get('CreateUserFormUsernameReducer').usernameError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    usernameChange: (username) => dispatch(usernameChange(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUserFormUsernameFormGroup);
