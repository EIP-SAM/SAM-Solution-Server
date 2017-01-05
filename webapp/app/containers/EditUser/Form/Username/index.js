//
// Container username form edit user
//

import { connect } from 'react-redux';
import { EditUserFormUsername } from 'components/EditUser/Form/Username';
import { usernameChange } from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('editUser').get('EditUserFormUsernameReducer').username,
    usernameError: state.get('editUser').get('EditUserFormUsernameReducer').usernameError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    usernameChange: username => dispatch(usernameChange(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormUsername);
