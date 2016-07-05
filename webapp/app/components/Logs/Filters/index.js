//
// LogFilter : Filters for query on the logs
//

import React from 'react';
import DatePicker from 'react-bootstrap-datetimepicker';
import style from './style.css';
import {
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        findOpts: {
          levelAbove: 10,
          levelBelow: 60,
        },
        limit: undefined,
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
        case 'levelAbove':
          newFilters.findOpts.levelAbove = event.target.value;
          break;
        case 'levelBelow':
          newFilters.findOpts.levelBelow = event.target.value;
          break;
        case 'limit':
          newFilters.limit = event.target.value;
          break;
        default:
      }
      this.setState({ filters: newFilters });
    };
  }

  render() {
    return (
      <div>
        <Panel className={style.panelFilter} collapsible header={<h3>[+] Filters</h3>} bsStyle="primary">

          <FormGroup controlId="levelAboveLogsSelect">
            <ControlLabel>Level min:</ControlLabel>
            <FormControl componentClass="select" onChange={this.handleChange('levelAbove')} placeholder="all">
              <option value="10">all</option>
              <option value="20">debug</option>
              <option value="30">info</option>
              <option value="40">warn</option>
              <option value="50">error</option>
              <option value="60">fatal</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="levelBelowLogsSelect">
            <ControlLabel>Level max:</ControlLabel>
            <FormControl componentClass="select" onChange={this.handleChange('levelBelow')} placeholder="all">
              <option value="10">all</option>
              <option value="20">debug</option>
              <option value="30">info</option>
              <option value="40">warn</option>
              <option value="50">error</option>
              <option value="60">fatal</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>From:</ControlLabel>
            <DatePicker />
          </FormGroup>

          <FormGroup>
            <ControlLabel>To:</ControlLabel>
            <DatePicker />
          </FormGroup>

          <FormGroup controlId="limitLogsSelect">
            <ControlLabel>Number of logs:</ControlLabel>
            <FormControl componentClass="select" onChange={this.handleChange('limit')} placeholder="all">
              <option value="undefined">all</option>
              <option value="2">2</option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              <option value="10000">10000</option>
            </FormControl>
          </FormGroup>

        </Panel>
        <ButtonToolbar>
          <Button className={style.getLogsToolbarButton} bsStyle="primary" onClick={() => this.getLogs()}>Get Logs</Button>
          <Button className={style.getLogsToolbarButton} bsStyle="success" onClick={this.props.clearLogs}>Clear</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

LogFilter.propTypes = {
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
