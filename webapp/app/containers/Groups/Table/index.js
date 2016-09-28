//
// Container table groups
//

import { connect } from 'react-redux';
import { GroupTable } from 'components/Groups/Table';

function mapStateToProps(state) {
  return {
    groups: state.get('groups').groups,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupTable);
