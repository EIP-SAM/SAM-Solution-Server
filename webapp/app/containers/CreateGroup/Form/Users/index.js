//
// Container users form create group
//

import { connect } from 'react-redux';
import CreateGroupFormUsers from 'components/CreateGroup/Form/Users';
import getUsersRequest from './actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersRequest: () => dispatch(getUsersRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGroupFormUsers);
