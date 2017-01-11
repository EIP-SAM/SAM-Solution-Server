//
// Component all users form notifications
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Notifications/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotificationsFormAllUsersSelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll() {
    this.props.removeUsers(this.props.users, this.props.users);
    this.props.addUsers(this.props.users);
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonBsStyle="info" buttonText="Select all" onClick={() => this.selectAll()} />
      </ButtonToolbar>
    );
  }
}

NotificationsFormAllUsersSelectAll.propTypes = {
  users: React.PropTypes.array,
  removeUsers: React.PropTypes.func,
  addUsers: React.PropTypes.func,
};
