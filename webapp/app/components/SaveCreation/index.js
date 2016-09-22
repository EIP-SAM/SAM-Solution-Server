//
// Page create save
//

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SaveCreationForm from 'containers/SaveCreation/Form';


/* eslint-disable react/prefer-stateless-function */
export class SaveCreation extends React.Component {
  componentWillUnmount() {
    this.props.resetStateForm();
  }

  render() {
    return (
      <div>
        <PageHeader>Scheduled Save</PageHeader>
        <SaveCreationForm />
      </div>
    );
  }
}

SaveCreation.propTypes = {
  resetStateForm: React.PropTypes.func,
};
