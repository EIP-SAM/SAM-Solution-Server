//
// List buttons page save
//

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from 'components/Save/Buttons/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveButtons extends React.Component {

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <Button bsStyle="info" className={styles.button}>Launch save for all</Button>
        <Button bsStyle="info" className={styles.button}>Program save for all</Button>
      </ButtonToolbar>
    );
  }
}
