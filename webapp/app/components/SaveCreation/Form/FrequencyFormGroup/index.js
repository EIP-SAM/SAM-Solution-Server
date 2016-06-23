//
// FrequencyFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFrequencyFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="frequency" className={styles.form}>
        <ControlLabel>Repeat</ControlLabel>
        <FormControl componentClass="select">
          <option value="0">No Repeat</option>
          <option value="1">Daily</option>
          <option value="2">Weekly</option>
          <option value="3">Monthy</option>
        </FormControl>
      </FormGroup>
    );
  }
}
