//
// Container table Users
//

import { connect } from 'react-redux';
import { UserTable } from 'components/Users/Table';
import { resetAlert } from 'containers/Users/actions';
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
    resetAlert: () => dispatch(resetAlert()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
