//
// Container users form create group
//

import { connect } from 'react-redux';
import { getUsersRequest } from './actions';
import { CreateGroupFormAllUsers } from 'components/CreateGroup/Form/Users/AllUsers';

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
)(CreateGroupFormAllUsers);
