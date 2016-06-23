//
// FilesFormGroup in form for page SaveCreation
//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationFilesFormGroup extends React.Component {
  render() {
    return (
      <FormGroup controlId="files" className={styles.form}>
        <ControlLabel>Files</ControlLabel>
        <FormControl componentClass="select" multiple>
          <option value="">select (multiple)</option>
          <option value="">...</option>
        </FormControl>
      </FormGroup>
    );
  }
}
