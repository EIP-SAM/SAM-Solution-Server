//
// Dashboard containers
//

import { connect } from 'react-redux';
import Dashboard from 'components/Dashboard';

function mapStateToProps(state) {
  return {
    currentUserName: state.get('app').userInfo.username,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
