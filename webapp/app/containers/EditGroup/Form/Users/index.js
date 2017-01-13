//
// Container users form edit group
//

import { connect } from 'react-redux';
import EditGroupFormUsers from 'components/EditGroup/Form/Users';
import getUsersRequest from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: name => dispatch(getUsersRequest(name)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupFormUsers);
