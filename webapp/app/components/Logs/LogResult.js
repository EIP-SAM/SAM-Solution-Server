//
// LogResult : block that shows the logs once a query
// has been executed
//

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class LogResult extends React.Component {
  render() {
    let logs = this.props.logs;
    if (typeof(logs) === 'undefined') {
      logs = { error: false, data: [] };
    }
    console.log(logs);
    return (
      <Jumbotron>
        {logs.data.map((log, i) => <p key={i}>{log.msg}</p>)}
      </Jumbotron>
    );
  }
}

LogResult.propTypes = {
  logs: React.PropTypes.object,
};
