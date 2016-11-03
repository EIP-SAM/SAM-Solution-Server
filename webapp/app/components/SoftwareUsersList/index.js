//
// Component page SoftwareUsersList
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SoftwareUsersListFilters from 'containers/SoftwareUsersList/Filters';

/* eslint-disable react/prefer-stateless-function */
export class SoftwareUsersList extends React.Component {

  componentDidMount() {
    // this.props.getRestoresRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Software Users List</PageHeader>
        <SoftwareUsersListFilters />
      </div>
    );
  }
}

SoftwareUsersList.propTypes = {
  // getRestoresRequest: React.PropTypes.func,
};
