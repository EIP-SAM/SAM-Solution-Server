//
// LogFilter : Filters for query on the logs
//

import React from 'react';
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
      <Panel collapsible header={<h3>[+] Filters</h3>} bsStyle="primary">
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
        <FormGroup controlId="limitLogsSelect">
          <ControlLabel>Number of logs:</ControlLabel>
          <FormControl componentClass="select" onChange={this.handleChange('limit')} placeholder="all">
            <option value="all">all</option>
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="1000">1000</option>
            <option value="10000">10000</option>
          </FormControl>
        </FormGroup>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => this.getLogs()}>Get Logs</Button>
          <Button bsStyle="success" onClick={this.props.clearLogs}>Clear</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

LogFilter.propTypes = {
  getAllLogs: React.PropTypes.func.isRequired,
  getLimitLogs: React.PropTypes.func.isRequired,
  getFilteredLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
