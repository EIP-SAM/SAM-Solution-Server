//
// Migration History page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Filters from 'containers/MigrationHistory/Filters';
import Buttons from 'components/MigrationHistory/Buttons';
import Table from 'containers/MigrationHistory/Table';

/* eslint-disable react/prefer-stateless-function */
export default class MigrationHistory extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Migrations History</PageHeader>
        <Filters />
        <Buttons />
        <Table />
      </div>
    );
  }
}
