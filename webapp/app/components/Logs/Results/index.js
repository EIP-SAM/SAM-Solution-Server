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
  Glyphicon,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogResult extends React.Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByLevel = this.sortByLevel.bind(this);
    this.sortByLogger = this.sortByLogger.bind(this);
    this.sortByMessage = this.sortByMessage.bind(this);

    const pageHeaderHeight = 130;
    const openFilterHeight = 345;

    this.state = {
      resultTableHeight: window.innerHeight - pageHeaderHeight - openFilterHeight,
      dateStatus: {
        style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
        order: 'DESC',
      },
      levelStatus: {
        style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
        order: 'DESC',
      },
      loggerStatus: {
        style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
        order: 'DESC',
      },
      messageStatus: {
        style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
        order: 'DESC',
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getDefaultLog() {
    let logs = this.props.logs;
    if (typeof (logs) === 'undefined') {
      logs = { error: false, data: [] };
    }

    return logs;
  }

  sortByDate() {
    const logs = this.getDefaultLog();

    if (this.state.dateStatus.order === 'DESC') {
      this.setState({
        dateStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-up',
          order: 'ASC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(a.time) - new Date(b.time)
      ));
    } else {
      this.setState({
        dateStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
          order: 'DESC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(b.time) - new Date(a.time)
      ));
    }
  }

  sortByLevel() {
    const logs = this.getDefaultLog();

    logs.data.sort((a, b) => (
      new Date(b.time) - new Date(a.time)
    ));

    if (this.state.levelStatus.order === 'DESC') {
      this.setState({
        levelStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-up',
          order: 'ASC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(a.level) - new Date(b.level)
      ));
    } else {
      this.setState({
        levelStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
          order: 'DESC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(b.level) - new Date(a.level)
      ));
    }
  }

  sortByLogger() {
    const logs = this.getDefaultLog();

    logs.data.sort((a, b) => (
      new Date(b.time) - new Date(a.time)
    ));

    if (this.state.loggerStatus.order === 'DESC') {
      this.setState({
        loggerStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-up',
          order: 'ASC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(a.name) - new Date(b.name)
      ));
    } else {
      this.setState({
        loggerStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
          order: 'DESC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(b.name) - new Date(a.name)
      ));
    }
  }

  sortByMessage() {
    const logs = this.getDefaultLog();

    logs.data.sort((a, b) => (
      new Date(b.time) - new Date(a.time)
    ));

    if (this.state.messageStatus.order === 'DESC') {
      this.setState({
        messageStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-up',
          order: 'ASC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(a.msg) - new Date(b.msg)
      ));
    } else {
      this.setState({
        messageStatus: {
          style: 'glyphicon glyphicon-glyphicon glyphicon-chevron-down',
          order: 'DESC',
        },
      });
      logs.data.sort((a, b) => (
        new Date(b.name) - new Date(a.name)
      ));
    }
  }

  formatDate(ISODate) {
    return moment(ISODate).format('YYYY MMMM Do HH:mm:ss');
  }

  handleResize() {
    const pageHeaderHeight = 130;
    const openFilterHeight = 345;

    this.setState({
      resultTableHeight: window.innerHeight - pageHeaderHeight - openFilterHeight,
    });
  }

  render() {
    const logs = this.getDefaultLog();

    const style = {
      height: this.state.resultTableHeight,
    };

    return (
      <div className={styles.divTabLogsResults} style={style}>
        <Table responsive hover className={styles.tableLogsResults}>
          <thead>
            <tr>
              <th onClick={this.sortByDate} className={styles.dateLogsCol}>
                Date
                <Glyphicon glyph={this.state.dateStatus.style} />
              </th>
              <th onClick={this.sortByLevel} className={styles.levelLogsCol}>
                Level
                <Glyphicon glyph={this.state.levelStatus.style} />
              </th>
              <th onClick={this.sortByLogger} className={styles.loggerLogsCol}>
                Logger
                <Glyphicon glyph={this.state.loggerStatus.style} />
              </th>
              <th onClick={this.sortByMessage} className={styles.messageLogsCol}>
                Message
                <Glyphicon glyph={this.state.messageStatus.style} />
              </th>
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
