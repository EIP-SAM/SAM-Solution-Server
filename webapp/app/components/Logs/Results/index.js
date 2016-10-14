//
// LogResult : block that shows the logs once a query
// has been executed
//

import React from 'react';
import moment from 'moment';
import styles from './styles.css';
import levels from './levels.json';
import Loader from 'halogen';
import {
  Table,
  Label,
  Glyphicon,
  Alert,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class LogResult extends React.Component {
  constructor(props) {
    super(props);

    this.sortByDate = this.sortByDate.bind(this);
    this.sortByLevel = this.sortByLevel.bind(this);
    this.sortByModule = this.sortByModule.bind(this);
    this.sortByMessage = this.sortByMessage.bind(this);
    this.getSortStyle = this.getSortStyle.bind(this);
    this.getRequestInfo = this.getRequestInfo.bind(this);
  }

  getSortStyle(column) {
    if (column === this.props.sorts) {
      return 'chevron-up';
    }
    return 'chevron-down';
  }

  getRequestInfo() {
    if (this.props.isLoading) {
      return <Loader.PulseLoader className={styles.logsResultLoader} color="#006dcc" />;
    } else if (this.props.logs.error) {
      return (
        <Alert bsStyle="danger">
          <h4>Server Error !</h4>
          <p>Sorry, something seems to be wrong with the server..</p>
        </Alert>
      );
    }
    return '';
  }

  formatDate(ISODate) {
    return moment(ISODate).format('YYYY MMMM Do HH:mm:ss');
  }

  sortString(first, second) {
    const a = (first) ? first.toLowerCase() : '';
    const b = (second) ? second.toLowerCase() : '';

    if (!a && b || a < b) {
      return -1;
    } else if (a && !b || a > b) {
      return 1;
    }
    return 0;
  }

  sortByDate() {
    if (this.props.sorts !== 'date') {
      this.props.setSorts('date');
      this.props.logs.data.sort((a, b) => (
        new Date(a.time) - new Date(b.time)
      ));
    } else {
      this.props.setSorts('none');
      this.props.logs.data.sort((a, b) => (
        new Date(b.time) - new Date(a.time)
      ));
    }
  }

  sortByLevel() {
    if (this.props.sorts !== 'level') {
      this.props.setSorts('level');
      this.props.logs.data.sort((a, b) => (
        a.level - b.level
      ));
    } else {
      this.props.setSorts('none');
      this.props.logs.data.sort((a, b) => (
        b.level - a.level
      ));
    }
  }

  sortByModule() {
    if (this.props.sorts !== 'module') {
      this.props.setSorts('module');
      this.props.logs.data.sort((a, b) => (
        this.sortString(a.moduleName, b.moduleName)
      ));
    } else {
      this.props.setSorts('none');
      this.props.logs.data.sort((a, b) => (
        this.sortString(b.moduleName, a.moduleName)
      ));
    }
  }

  sortByMessage() {
    if (this.props.sorts !== 'message') {
      this.props.setSorts('message');
      this.props.logs.data.sort((a, b) => (
        this.sortString(a.msg, b.msg)
      ));
    } else {
      this.props.setSorts('none');
      this.props.logs.data.sort((a, b) => (
        this.sortString(b.msg, a.msg)
      ));
    }
  }

  render() {
    return (
      <div className={styles.divTabLogsResults}>
        <Table responsive hover className={styles.tableLogsResults}>
          <thead>
            <tr>
              <th onClick={this.sortByDate} className={styles.dateLogsCol}>
                Date
                <Glyphicon glyph={this.getSortStyle('date')} />
              </th>
              <th onClick={this.sortByLevel} className={styles.levelLogsCol}>
                Level
                <Glyphicon glyph={this.getSortStyle('level')} />
              </th>
              <th onClick={this.sortByModule} className={styles.moduleLogsCol}>
                Module
                <Glyphicon glyph={this.getSortStyle('module')} />
              </th>
              <th onClick={this.sortByMessage} className={styles.messageLogsCol}>
                Message
                <Glyphicon glyph={this.getSortStyle('message')} />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.logs.data.map((log, index) => (
              <tr className={styles.trLogsResults} key={index}>
                <td>
                  {this.formatDate(log.time)}
                </td>
                <td>
                  <Label bsStyle={levels[log.level].style}>{levels[log.level].name}</Label>
                </td>
                <td>
                  {log.moduleName}
                </td>
                <td>
                  {log.msg}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {this.getRequestInfo()}
      </div>
    );
  }
}

LogResult.propTypes = {
  logs: React.PropTypes.object.isRequired,
  sorts: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  setSorts: React.PropTypes.func.isRequired,
};
