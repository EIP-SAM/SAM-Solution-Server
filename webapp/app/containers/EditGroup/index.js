//
// Container EditGroup
//

import { connect } from 'react-redux';
import { editGroupRequest } from './actions';
import { getGroupRequest } from './actions';
import { getUsersRequest } from './actions';
import { EditGroup } from 'components/EditGroup';

function mapStateToProps(state) {
  return {
    state: state.get('editGroup'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGroupRequest: (id, callback) => dispatch(getGroupRequest(id, callback)),
    editGroupRequest: (group) => dispatch(editGroupRequest(group)),
    getUsersRequest: (users) => dispatch(getUsersRequest(users)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroup);
