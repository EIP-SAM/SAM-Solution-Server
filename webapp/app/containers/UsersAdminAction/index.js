//
// Container Users
//

import { connect } from 'react-redux';
import { getCurrentUserRequest } from 'containers/EditUser/Form/actions';
import { UsersAdminAction } from 'components/UsersAdminAction/';

function mapStateToProps(state) {
  return {
    state: state.get('editUser'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUserRequest: () => dispatch(getCurrentUserRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAdminAction);
