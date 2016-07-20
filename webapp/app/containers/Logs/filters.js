//
// Container for log filters
//

import { connect } from 'react-redux';
import {
  setFilters,
  resetFilters,
  collapsePanel,
  incKeyRerender,
} from './actions/filters';
import { getFilteredLogs, clearLogs } from './actions/result';
import LogFilters from 'components/Logs/Filters/';

function mapStateToProps(state) {
  const storeKey = state.get('logs').get('filters').get('keyRerender');
  const storeFilters = state.get('logs').get('filters').get('fields').filters;
  const storePanel = state.get('logs').get('filters').get('panel').info;

  return {
    keyRerender: storeKey || 0,
    filters: storeFilters || { findOpts: { force: true } },
    panel: storePanel || {
      isCollapsed: true,
      titleIcon: 'plus-sign',
      titleHelp: '(click to show)',
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilters: (filters) => dispatch(setFilters(filters)),
    resetFilters: () => dispatch(resetFilters()),
    getFilteredLogs: (filters) => dispatch(getFilteredLogs(filters)),
    clearLogs: () => dispatch(clearLogs()),
    collapsePanel: (isCollapsed) => dispatch(collapsePanel(isCollapsed)),
    incKeyRerender: () => dispatch(incKeyRerender()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogFilters);
