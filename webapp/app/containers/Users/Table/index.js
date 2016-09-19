//
// Container table Users
//

import { connect } from 'react-redux';
import { UserTable } from 'components/Users/Table';
import { rebootUser } from './actions';
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
    rebootUser: (username) => dispatch(rebootUser(username)),
    showInstantDeleteModal: () => dispatch(showInstantDeleteModal()),
    userToDelete: (username, userId) => dispatch(userToDelete(username, userId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
