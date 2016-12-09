//
// Migration History page main components
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Filters from 'containers/MigrationHistory/Filters';
import Buttons from 'containers/MigrationHistory/Buttons';
import Table from 'containers/MigrationHistory/Table';
import Create from 'containers/MigrationHistory/Create';
import Delete from 'containers/MigrationHistory/Delete';

/* eslint-disable react/prefer-stateless-function */
export default class MigrationHistory extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Migrations History</PageHeader>
        <Filters />
        <Buttons />
        <Table />
        <Create />
        <Delete />
      </div>
    );
  }
}
