//
// Homepage containers
//

import { connect } from 'react-redux';
import Homepage from 'components/Homepage';

function mapStateToProps(state) {
  return {
    currentUserName: state.get('app').userInfo.username,
    isAdmin: state.get('app').userInfo.isAdmin,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
