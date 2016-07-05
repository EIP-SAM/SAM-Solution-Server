//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationTimeFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="time">
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" />
      </FormGroup>
    );
  }
}
