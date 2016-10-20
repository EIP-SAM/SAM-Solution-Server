//
// Component notifications form buttons
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormButtons extends React.Component {
  handleCreateClick(event) {
    // Creates notifications if title is defined and at least one user is selected
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Create" onClick={(event) => this.handleCreateClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={(event) => this.handleCancelClick(event)} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormButtons.propTypes = {
};
