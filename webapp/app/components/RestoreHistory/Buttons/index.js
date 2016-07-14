//
// List buttons page history save by user
//

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from 'components/RestoreHistory/Buttons/styles.css';
import { LinkContainerButton } from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
export class RestoreHistoryButtons extends React.Component {
  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" className={styles.button} buttonText="Launch restore" link={'/create-restore/' + this.props.username} />
      </ButtonToolbar>
    );
  }
}

RestoreHistoryButtons.propTypes = {
  username: React.PropTypes.string,
};
