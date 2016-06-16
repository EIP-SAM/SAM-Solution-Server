//
// LogResult : block that shows the logs once a query
// has been executed
//

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export default class LogResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logsContent: 'some logs',
    };
  }

  render() {
    return (
      <Jumbotron>
        {this.state.logsContent};
      </Jumbotron>
    );
  }
}
