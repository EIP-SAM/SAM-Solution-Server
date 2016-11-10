//
// Container table page software
//

import { connect } from 'react-redux';
import { SoftwareTable } from 'components/Software/Table';

function mapStateToProps(state) {
  return {
    users: state.get('software').get('SoftwareReducer').users,
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
