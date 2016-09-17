//
// Container Users
//

import { connect } from 'react-redux';
import { Users } from 'components/Users';
import {
  getUsersRequest,
  deleteUser,
  hideInstantDeleteModal,
  showInstantDeleteModal,
  rebootUser,
} from './actions';

function mapStateToProps(state) {
  return {
    state: state.get('users'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
    rebootUser: (username) => dispatch(rebootUser(username)),
    deleteUser: (user) => dispatch(deleteUser(user)),
    hideInstantDeleteModal: () => dispatch(hideInstantDeleteModal()),
    showInstantDeleteModal: () => dispatch(showInstantDeleteModal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
