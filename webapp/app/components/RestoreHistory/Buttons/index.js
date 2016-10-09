//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import styles from 'components/RestoreHistory/Buttons/styles.css';
import { LinkContainerButton } from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryButtons extends React.Component {
  render() {
    const username = window.location.pathname.split('/')[2];
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonBsStyle="info" className={styles.button} buttonText="Launch restore" link={`/create-restore/${username}`} />
      </ButtonToolbar>
    );
  }
}
