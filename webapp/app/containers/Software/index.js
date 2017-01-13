//
// Container page Software
//

import { connect } from 'react-redux';
import Software from 'components/Software';
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
)(Software);
