//
// Container for Migration History Filters
//

import { connect } from 'react-redux';
import Filters from 'components/MigrationHistory/Filters';
import { setStatusFilter } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    setStatusFilter: statusFilter => dispatch(setStatusFilter(statusFilter)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Filters);
