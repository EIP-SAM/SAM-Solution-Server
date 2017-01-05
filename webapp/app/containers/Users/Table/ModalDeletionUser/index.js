//
// Container User deletion modal Users
//

import { connect } from 'react-redux';
import { UserDeletionModal } from 'components/Users/Table/ModalDeletionUser';
import {
  deleteUser,
  hideInstantDeleteModal,
} from './actions';

function mapStateToProps(state) {
  return {
    username: state.get('users').get('UsersReducer').username,
    userId: state.get('users').get('UsersDeletionModalReducer').userId,
    showModal: state.get('users').get('UsersDeletionModalReducer').showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: userId => dispatch(deleteUser(userId)),
    hideInstantDeleteModal: () => dispatch(hideInstantDeleteModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDeletionModal);
