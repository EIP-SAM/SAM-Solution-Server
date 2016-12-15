//
// Container table page software
//

import { connect } from 'react-redux';
import { SoftwareTable } from 'components/Software/Table';

function mapStateToProps(state) {
  return {
    users: state.get('software').get('SoftwareReducer').users,
    refresh: state.get('software').get('SoftwareReducer').refresh,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoftwareTable);
