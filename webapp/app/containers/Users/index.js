//
// Container Users
//

import { connect } from 'react-redux';
import { getUsersRequest } from './actions';
import { Users } from 'components/Users';

function mapStateToProps(state) {
  return {
    state: state.get('users'),
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
