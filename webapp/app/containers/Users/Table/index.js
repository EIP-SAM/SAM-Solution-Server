//
// Container table Users
//

import { connect } from 'react-redux';
import { UserTable } from 'components/Users/Table';
import { getUsername } from 'containers/Users/actions';
import { showInstantRebootModal } from './ModalRebootUser/actions';
import {
  showInstantDeleteModal,
  userToDelete,
} from './ModalDeletionUser/actions';

function mapStateToProps(state) {
  return {
    users: state.get('users').get('UsersReducer').users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showInstantDeleteModal: () => dispatch(showInstantDeleteModal()),
    showInstantRebootModal: () => dispatch(showInstantRebootModal()),
    userToDelete: (userId) => dispatch(userToDelete(userId)),
    getUsername: (username) => dispatch(getUsername(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
