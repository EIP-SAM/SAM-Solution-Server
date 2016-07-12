//
// LogFilter : Filters for query on the logs
//

import React from 'react';
import styles from './styles.css';
import DateRange from './DateRange';
import LevelRange from './LevelRange';
import NumberLogs from './NumberLogs';
import {
  Panel,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        findOpts: { forceObject: true },
      },
    };
  }

  getLogs() {
    this.props.getFilteredLogs(this.state.filters);
  }

  handleChange(name) {
    return event => {
      const newFilters = this.state.filters;
      switch (name) {
        case 'number':
          if (event !== 'all') {
            newFilters.limit = event;
          } else {
            delete newFilters.limit;
          }
          break;
        case 'level':
          if (event.specific) {
            if (event.levelOne !== 'all') {
              newFilters.findOpts.level = event.levelOne;
            } else {
              delete newFilters.findOpts.level;
            }
            delete newFilters.findOpts.levelAbove;
            delete newFilters.findOpts.levelBelow;
          } else {
            if (event.levelOne !== 'all') {
              newFilters.findOpts.levelAbove = event.levelOne;
            } else {
              delete newFilters.findOpts.levelAbove;
            }
            if (event.levelTwo !== 'all') {
              newFilters.findOpts.levelBelow = event.levelTwo;
            } else {
              delete newFilters.findOpts.levelBelow;
            }
            delete newFilters.findOpts.level;
          }
          break;
        case 'date':
          if (event.specific) {
            if (event.dateOne !== null) {
              newFilters.findOpts.day = event.dateOne;
            } else {
              delete newFilters.findOpts.day;
            }
            delete newFilters.findOpts.afterDate;
            delete newFilters.findOpts.beforeDate;
          } else {
            if (event.dateOne !== null) {
              newFilters.findOpts.afterDate = event.dateOne;
            } else {
              delete newFilters.findOpts.afterDate;
            }
            if (event.dateTwo !== null) {
              const nextDay = new Date(event.dateTwo);
              nextDay.setDate(nextDay.getDate() + 1);
              newFilters.findOpts.beforeDate = nextDay.toISOString();
            } else {
              delete newFilters.findOpts.beforeDate;
            }
            delete newFilters.findOpts.day;
          }
          break;
        default:
      }
      this.setState({ filters: newFilters });
    };
  }

  render() {
    return (
      <div>
        <Panel className={styles.panelFilterLogs} collapsible header={<h3>[+] Filters</h3>} bsStyle="primary">
          <LevelRange onChange={this.handleChange('level')} />
          <DateRange onChange={this.handleChange('date')} />
          <NumberLogs onChange={this.handleChange('number')} />
        </Panel>
        <ButtonToolbar>
          <Button className={styles.getLogsToolbarButton} bsStyle="primary" onClick={() => this.getLogs()}>Get Logs</Button>
          <Button className={styles.getLogsToolbarButton} bsStyle="success" onClick={this.props.clearLogs}>Clear</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

LogFilter.propTypes = {
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
