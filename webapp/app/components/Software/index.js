//
// Component page Software
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SoftwareTable from 'containers/Software/Table';
import SoftwareFilters from 'containers/Software/Filters'

/* eslint-disable react/prefer-stateless-function */
export class Software extends React.Component {

  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Software</PageHeader>
        <SoftwareFilters />
        <SoftwareTable />
      </div>
    );
  }
}

Software.propTypes = {
  getUsersRequest: React.PropTypes.func,
};
