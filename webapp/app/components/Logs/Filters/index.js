//
// LogFilter : Filters for query on the logs
//

import React from 'react';
import moment from 'moment';
import {
  Panel,
  Button,
  ButtonToolbar,
  Glyphicon,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import styles from './styles.css';
import DateRange from './DateRange';
import LevelRange from './LevelRange';
import NumberLogs from './NumberLogs';

/* eslint-disable react/prefer-stateless-function */
export default class LogFilter extends React.Component {
  constructor(props) {
    super(props);

    this.getLogs = this.getLogs.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentWillMount() {
    this.props.resetFilters();
    this.props.resetPanel();
  }

  getLogs() {
    this.props.setSorts('none');
    this.props.getFilteredLogs(this.props.filters);
  }

  getHeaderPanel() {
    return (
      <h5>
        <Glyphicon glyph={this.props.panel.titleIcon} />
        {' Filters '}
        <span className={styles.panelTitleHelpLogs} onClick={() => this.props.collapsePanel(this.props.panel.isCollapsed)}>
          {this.props.panel.titleHelp}
        </span>
      </h5>
    );
  }

  handleChange(name) {
    return (event) => {
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
              const nextDay = moment(event.dateTwo).add(1, 'days').startOf('date').subtract(1, 'second').utcOffset(event.dateTwo).toISOString();

              newFilters.findOpts.beforeDate = nextDay;
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
  filters: React.PropTypes.shape({
    findOpts: React.PropTypes.object,
  }),
  panel: React.PropTypes.shape({
    isCollapsed: React.PropTypes.bool,
    titleIcon: React.PropTypes.string,
    titleHelp: React.PropTypes.string,
  }),
  collapsePanel: React.PropTypes.func.isRequired,
  setFilters: React.PropTypes.func.isRequired,
  resetFilters: React.PropTypes.func.isRequired,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
  setSorts: React.PropTypes.func.isRequired,
  resetPanel: React.PropTypes.func.isRequired,
};
