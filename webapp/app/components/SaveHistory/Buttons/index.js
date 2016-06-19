//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from 'components/SaveHistory/Buttons/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryButtons extends React.Component {

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <Button bsStyle="info" className={styles.button}>Launch save</Button>
        <Button bsStyle="info" className={styles.button}>Program save</Button>
      </ButtonToolbar>
    );
  }
}
