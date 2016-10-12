//
// Logs page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Filters from 'containers/Logs/filters';
import Result from 'containers/Logs/result';

/* eslint-disable react/prefer-stateless-function */
export default class Log extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Logs</PageHeader>
        <Filters />
        <Result />
      </div>
    );
  }
}
