//
// Logs page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { LogFilter } from 'components/Logs/Filters';
import { LogResult } from 'components/Logs/Results';

/* eslint-disable react/prefer-stateless-function */
export class Log extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Logs</PageHeader>
        <LogFilter
          getFilteredLogs={this.props.getFilteredLogs}
          clearLogs={this.props.clearLogs}
        />
        <LogResult logs={this.props.logs} />
      </div>
    );
  }
}

Log.propTypes = {
  logs: React.PropTypes.object,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
