//
// Page create save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SaveCreationForm from 'containers/Save/SaveCreation/Form';


/* eslint-disable react/prefer-stateless-function */
export class SaveCreation extends React.Component {

  render() {
    return (
      <div>
        <PageHeader>Scheduled Save</PageHeader>
        <SaveCreationForm />
      </div>
    );
  }
}
