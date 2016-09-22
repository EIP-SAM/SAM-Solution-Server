//
// Container EditUser
//

import { connect } from 'react-redux';
import { getUserRequest } from './actions';
import { getCurrentUserRequest } from './actions';
import { editUserRequest } from './actions';
import { getGroupsRequest } from './actions';
import { EditUser } from 'components/EditUser';

function mapStateToProps(state) {
  return {
    state: state.get('editUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserRequest: (id, callback) => dispatch(getUserRequest(id, callback)),
    getCurrentUserRequest: () => dispatch(getCurrentUserRequest()),
    editUserRequest: (user) => dispatch(editUserRequest(user)),
    getGroupsRequest: (groups) => dispatch(getGroupsRequest(groups)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
