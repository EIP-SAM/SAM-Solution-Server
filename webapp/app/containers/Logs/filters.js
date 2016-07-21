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
import {
  getFilteredLogs,
  clearLogs,
  setSorts,
} from './actions/result';
import LogFilters from 'components/Logs/Filters/';

function getDefaultKeyRerender(state) {
  return state.get('logs').get('filters').get('keyRerender') || 0;
}

function getDefaultFilters(state) {
  return state.get('logs').get('filters').get('fields').filters ||
    { findOpts: { force: true } };
}

function getDefaultPanel(state) {
  return state.get('logs').get('filters').get('panel').info ||
    {
      isCollapsed: true,
      titleIcon: 'plus-sign',
      titleHelp: '(click to show)',
    };
}

function mapStateToProps(state) {
  return {
    keyRerender: getDefaultKeyRerender(state),
    filters: getDefaultFilters(state),
    panel: getDefaultPanel(state),
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
    setSorts: (sort) => dispatch(setSorts(sort)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogFilters);
