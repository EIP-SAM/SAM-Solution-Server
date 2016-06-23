//
// TimeFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationTimeFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="time" className={styles.form}>
        <ControlLabel>Time</ControlLabel>
        <FormControl type="time" />
      </FormGroup>
    );
  }
}
