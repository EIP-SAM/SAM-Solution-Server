//
// List Buttons form page SaveCreation
//

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from 'components/SaveCreation/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveCreationButtons extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button type="submit" bsStyle="info" className={styles.button}>Create</Button>
        <Button type="submit" className={styles.button}>Cancel</Button>
      </ButtonToolbar>
    );
  }
}
