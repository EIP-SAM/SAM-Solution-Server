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
    const username = this.props.selectedUsers.map((user) => (
      user.name
    ));
    console.log(username);
    this.props.notificationRequest(this.props.title, this.props.description, username);
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Display" onClick={(event) => this.handleCreateClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={(event) => this.handleCancelClick(event)} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormButtons.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  selectedUsers: React.PropTypes.array,
  notificationRequest: React.PropTypes.func,
};
