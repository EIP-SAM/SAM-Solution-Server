//
// Container table Users
//

import { connect } from 'react-redux';
import UserTable from 'components/Users/Table';
import { getUsername } from 'containers/Users/actions';
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
<<<<<<< HEAD
    userToDelete: userId => dispatch(userToDelete(userId)),
    getUsername: username => dispatch(getUsername(username)),
=======
    userToDelete: (userId) => dispatch(userToDelete(userId)),
    getUsername: (username) => dispatch(getUsername(username)),
>>>>>>> #359: add reboot button in dashboard by user + remove reboot action button in users page
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
