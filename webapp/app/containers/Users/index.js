//
// Container Users
//

import { connect } from 'react-redux';
import { Users } from 'components/Users';
import { getUsersRequest } from './actions';

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
)(Users);
