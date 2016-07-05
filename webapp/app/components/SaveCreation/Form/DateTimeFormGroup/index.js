//
// DateFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { DatePicker } from 'components/DatePicker';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationDateFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="date" className={styles.form}>
        <ControlLabel className={styles.label}>Date</ControlLabel>
        <DatePicker />
      </FormGroup>
    );
  }
}
