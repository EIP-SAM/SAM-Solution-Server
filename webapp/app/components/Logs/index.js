//
// Logs page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { LogFilter } from 'components/Logs/Filters';
import { LogResult } from 'components/Logs/Results';
import styles from 'components/Logs/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class Log extends React.Component {
  render() {
    return (
      <div className={styles.inheritWith}>
        <PageHeader>Logs</PageHeader>
        <LogFilter
          getFilteredLogs={this.props.getFilteredLogs}
          clearLogs={this.props.clearLogs}
        />
        <LogResult logs={this.props.logs.logs} />
      </div>
    );
  }
}

Log.propTypes = {
  logs: React.PropTypes.object.isRequired,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
