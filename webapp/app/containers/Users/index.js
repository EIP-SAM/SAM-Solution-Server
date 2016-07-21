//
// Container Users
//

import { connect } from 'react-redux';
import { getUsersRequest, deleteUser, hideInstantDeleteModal, showInstantDeleteModal } from './actions';
import { Users } from 'components/Users';

function mapStateToProps(state) {
  return {
    state: state.get('users'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
    deleteUser: (user) => dispatch(deleteUser(user)),
    hideInstantDeleteModal: () => dispatch(hideInstantDeleteModal()),
    showInstantDeleteModal: () => dispatch(showInstantDeleteModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
