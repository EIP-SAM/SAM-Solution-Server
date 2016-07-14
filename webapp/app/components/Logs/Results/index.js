//
// LogResult : block that shows the logs once a query
// has been executed
//

import React from 'react';
import moment from 'moment';
import styles from './styles.css';
import levels from './levels.json';
import {
  Table,
  Label,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogResult extends React.Component {
  getDefaultLog() {
    let logs = this.props.logs;
    if (typeof(logs) === 'undefined') {
      logs = { error: false, data: [] };
    }
    return logs;
  }

  formatDate(ISODate) {
    return moment(ISODate).format('YYYY MMMM Do HH:mm:ss');
  }

  render() {
    const logs = this.getDefaultLog();

    return (
      <div className={styles.divTabLogsResults}>
        <Table responsive hover className={styles.tableLogsResults}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Level</th>
              <th>Logger</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {logs.data.map((log, index) => (
              <tr className={styles.trLogsResults} key={index}>
                <td>
                  {this.formatDate(log.time)}
                </td>
                <td>
                  <Label bsStyle={levels[log.level].style}>{levels[log.level].name}</Label>
                </td>
                <td>
                  {log.name}
                </td>
                <td>
                  {log.msg}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

LogResult.propTypes = {
  logs: React.PropTypes.object,
};
