//
// Logs page main components
//

import React from 'react';
import PageHeader from 'react-bootstrap';
import LogFilter from './LogFilter';
import LogResult from './LogResult';

/* eslint-disable react/prefer-stateless-function */
export default class LogPage extends React.Component {
  render() {
    console.log(this.props.logs);
    return (
      <div>
        <PageHeader>Logs</PageHeader>
        <LogFilter loadLog={() => console.log('TODO')} />
        <LogResult />
      </div>
    );
  }
}

LogPage.propTypes = {
  logs: React.PropTypes.object.isRequired,
  getAllLogsRequest: React.PropTypes.func.isRequired,
};
