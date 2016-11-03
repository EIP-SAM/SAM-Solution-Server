//
// Container page SoftwareUsersList
//

import { connect } from 'react-redux';
import { getUsersRequest } from './actions';
import { SoftwareUsersListComponent } from 'components/SoftwareUsersList';

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
)(SoftwareUsersListComponent);
