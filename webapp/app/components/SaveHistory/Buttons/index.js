//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/SaveHistory/Buttons/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class SaveHistoryButtons extends React.Component {

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" className={styles.button} buttonText="Launch save" link="/create-save" />
        <LinkContainerButton buttonType="info" className={styles.button} buttonText="Program save" link="/create-save" />
      </ButtonToolbar>
    );
  }
}
