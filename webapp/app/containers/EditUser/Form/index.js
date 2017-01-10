//
// Container form edit user
//

import { connect } from 'react-redux';
import EditUserForm from 'components/EditUser/Form';
import { getUserRequest } from './actions';
import { getGroupsRequest } from './Groups/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserRequest: id => dispatch(getUserRequest(id)),
    getGroupsRequest: () => dispatch(getGroupsRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserForm);
