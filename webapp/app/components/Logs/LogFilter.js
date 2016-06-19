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
      </ButtonToolbar>
    );
  }
}

LogFilter.propTypes = {
  getAllLogs: React.PropTypes.func.isRequired,
};
