//
// Component page save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import RestoreCreationForm from 'containers/RestoreCreation/Form';

/* eslint-disable react/prefer-stateless-function */
export class RestoreCreation extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Launch Restore</PageHeader>
        <RestoreCreationForm />
      </div>
    );
  }
}
