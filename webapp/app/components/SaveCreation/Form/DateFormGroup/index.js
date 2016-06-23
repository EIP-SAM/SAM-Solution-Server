//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationDateFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="date" className={styles.form}>
        <ControlLabel>Date</ControlLabel>
        <FormControl type="date" />
      </FormGroup>
    );
  }
}
