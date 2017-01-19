//
// Homepage containers
//

import { connect } from 'react-redux';
import Homepage from 'components/Homepage';

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
)(Homepage);
