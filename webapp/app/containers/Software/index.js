//
// Container page Software
//

import { connect } from 'react-redux';
import { getUsersRequest } from './actions';
import { Software } from 'components/Software';

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
