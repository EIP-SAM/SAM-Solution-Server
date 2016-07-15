//
// Container for log filters
//

import { connect } from 'react-redux';
import { setFilters, resetFilters } from './actions/filters';
import { getFilteredLogs, clearLogs } from './actions/result';
import { LogFilter } from 'components/Logs/Filters/';

function mapStateToProps(state) {
  const storeFilters = state.get('logs').get('filters').filters;
  return {
    filters: storeFilters || { findOpts: { force: true } },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilters: (filters) => dispatch(setFilters(filters)),
    resetFilters: () => dispatch(resetFilters()),
    getFilteredLogs: (filters) => dispatch(getFilteredLogs(filters)),
    clearLogs: () => dispatch(clearLogs()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogFilter);
