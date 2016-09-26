//
// Container form edit user
//

import { connect } from 'react-redux';
import { getUserRequest, editUserRequest, getGroupsRequest } from './actions';
import { EditUserForm } from 'components/EditUser/Form';

function mapStateToProps(state) {
  return {
    state: state.get('editUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserRequest: (id) => dispatch(getUserRequest(id)),
    editUserRequest: (user) => dispatch(editUserRequest(user)),
    getGroupsRequest: (groups) => dispatch(getGroupsRequest(groups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserForm);
