//
// Component EditUser
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import EditUserForm from 'containers/EditUser/Form';

/* eslint-disable react/prefer-stateless-function */
export class EditUser extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Edit user</PageHeader>
        <EditUserForm />
      </div>
    );
  }
}
