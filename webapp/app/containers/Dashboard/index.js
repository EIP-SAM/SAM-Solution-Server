//
// Dashboard containers
//

import { connect } from 'react-redux';
import { Dashboard } from 'components/Dashboard';

function mapStateToProps(state) {
  return {
    userInfo: state.get('login').userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
