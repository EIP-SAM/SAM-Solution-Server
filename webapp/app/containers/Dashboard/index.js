//
// Dashboard containers
//

import { connect } from 'react-redux';
import { Dashboard } from 'components/Dashboard';

function mapStateToProps(state) {
  console.log(state);
  return {
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
