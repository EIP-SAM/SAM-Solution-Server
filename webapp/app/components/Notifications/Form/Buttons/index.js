//
// Component notifications form buttons
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormButtons extends React.Component {
  handleCreateClick(event) {
    let username;
    let isGroup;
    event.preventDefault();
    if (this.props.selectedGroups.length > 0) {
      username = this.props.selectedGroups.map(group => (
        group.name
      ));
      isGroup = true;
    } else {
      username = this.props.selectedUsers.map(user => (
        user.name
      ));
      isGroup = false;
    }
    if (this.props.title !== '' && this.props.description !== '' && (this.props.selectedUsers.length !== 0 || this.props.selectedGroups.length !== 0)) {
      this.props.notificationRequest(this.props.title, this.props.description, this.props.persistence, username, isGroup);
    } else if (this.props.title === '' && this.props.description === '' && this.props.selectedUsers.length === 0 && this.props.selectedGroups.length === 0) {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.descriptionErrorMsg('A notification must have a description');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
      this.props.selectedGroupsErrorMsg('At least one group must be selected');
    } else if (this.props.title === '' && this.props.description === '') {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.descriptionErrorMsg('A notification must have a description');
    } else if (this.props.title === '' && this.props.selectedUsers.length === 0 && this.props.selectedGroups.length === 0) {
      this.props.titleErrorMsg('A notification must have a title');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
      this.props.selectedGroupsErrorMsg('At least one group must be selected');
    } else if (this.props.description === '' && this.props.selectedUsers.length === 0 && this.props.selectedGroups.length === 0) {
      this.props.descriptionErrorMsg('A notification must have a description');
      this.props.selectedUsersErrorMsg('At least one user must be selected');
      this.props.selectedGroupsErrorMsg('At least one group must be selected');
    } else if (this.props.title === '') {
      this.props.titleErrorMsg('A notification must have a title');
    } else if (this.props.description === '') {
      this.props.descriptionErrorMsg('A notification must have a description');
    } else if (this.props.selectedUsers.length === 0 && this.props.selectedGroups.length === 0) {
      this.props.selectedUsersErrorMsg('At least one user must be selected');
      this.props.selectedGroupsErrorMsg('At least one group must be selected');
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Send" onClick={event => this.handleCreateClick(event)} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormButtons.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  persistence: React.PropTypes.bool,
  selectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedGroups: React.PropTypes.arrayOf(React.PropTypes.object),
  notificationRequest: React.PropTypes.func,
  titleErrorMsg: React.PropTypes.func,
  descriptionErrorMsg: React.PropTypes.func,
  selectedUsersErrorMsg: React.PropTypes.func,
  selectedGroupsErrorMsg: React.PropTypes.func,
};
