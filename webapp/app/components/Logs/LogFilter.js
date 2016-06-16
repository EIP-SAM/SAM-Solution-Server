//
// LogFilter : Filters for query on the logs
//

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class LogFilter extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.props.loadLog}>Get Logs</Button>
      </ButtonToolbar>
    );
  }
}

LogFilter.propTypes = {
  loadLog: React.PropTypes.func.isRequired,
};
