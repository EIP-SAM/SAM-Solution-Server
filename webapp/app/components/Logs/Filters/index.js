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
  Glyphicon,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class LogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getLogs = this.getLogs.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  getLogs() {
    this.props.getFilteredLogs(this.props.filters);
  }

  getHeaderPanel() {
    return (
      <h5 onClick={() => this.props.collapsePanel(this.props.panel.isCollapsed)}>
        <Glyphicon glyph={this.props.panel.titleIcon} />
        {' Filters '}
        <span className={styles.panelTitleHelpLogs}>
          {this.props.panel.titleHelp}
        </span>
      </h5>
    );
  }

  handleChange(name) {
    return event => {
      const newFilters = this.props.filters;
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
      this.props.setFilters(newFilters);
    };
  }

  resetFilters() {
    this.props.incKeyRerender();
    this.props.resetFilters();
  }

  render() {
    return (
      <div>
        <Panel className={styles.panelFilterLogs} collapsible header={this.getHeaderPanel()} bsStyle="primary">
          <Grid fluid>
            <Row>
              <Col xs={9} md={6}>
                <LevelRange key={this.props.keyRerender} onChange={this.handleChange('level')} />
              </Col>
              <Col xs={9} md={6}>
                <DateRange key={this.props.keyRerender} onChange={this.handleChange('date')} />
              </Col>
            </Row>
            <NumberLogs key={this.props.keyRerender} onChange={this.handleChange('number')} />
          </Grid>
        </Panel>
        <ButtonToolbar>
          <Button className={styles.getLogsToolbarButton} bsStyle="primary" onClick={this.getLogs}>Get Logs</Button>
          <Button className={styles.getLogsToolbarButton} bsStyle="success" onClick={this.props.clearLogs}>Clear Logs</Button>
          <Button className={styles.getLogsToolbarButton} bsStyle="warning" onClick={this.resetFilters}>Reset Filters</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

LogFilter.propTypes = {
  keyRerender: React.PropTypes.number.isRequired,
  incKeyRerender: React.PropTypes.func.isRequired,
  filters: React.PropTypes.object.isRequired,
  panel: React.PropTypes.object.isRequired,
  collapsePanel: React.PropTypes.func.isRequired,
  setFilters: React.PropTypes.func.isRequired,
  resetFilters: React.PropTypes.func.isRequired,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
