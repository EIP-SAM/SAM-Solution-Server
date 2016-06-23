//
// LogFilter : Filters for query on the logs
//

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogFilter extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.props.getAllLogs}>Get Logs</Button>
        <Button bsStyle="primary" onClick={this.props.getLimitLogs}>Get 5 last logs</Button>
        <Button bsStyle="success" onClick={this.props.clearLogs}>Clear</Button>
      </ButtonToolbar>
    );
  }
}

LogFilter.propTypes = {
  getAllLogs: React.PropTypes.func.isRequired,
  getLimitLogs: React.PropTypes.func.isRequired,
  clearLogs: React.PropTypes.func.isRequired,
};
