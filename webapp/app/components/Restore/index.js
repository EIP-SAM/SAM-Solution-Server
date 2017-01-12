//
// Component page restore
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import RestoreTable from 'containers/Restore/Table';
import RestoreFilters from 'containers/Restore/Filters';

/* eslint-disable react/prefer-stateless-function */
export default class Restore extends React.Component {

  componentDidMount() {
    this.props.getRestoresRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Restore</PageHeader>
        <RestoreFilters />
        <RestoreTable />
      </div>
    );
  }
}

Restore.propTypes = {
  getRestoresRequest: React.PropTypes.func,
};
