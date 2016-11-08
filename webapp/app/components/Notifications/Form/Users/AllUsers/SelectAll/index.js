//
// Component all users form notifications
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class NotificationsFormAllUsersSelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll(event) {
    this.props.removeUsers(this.props.users, this.props.users);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonBsStyle="default" buttonText="Select all" onClick={(event) => this.selectAll(event)} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormAllUsersSelectAll.propTypes = {
  users: React.PropTypes.array,
  removeUsers: React.PropTypes.func,
};
