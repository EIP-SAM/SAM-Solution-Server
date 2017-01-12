//
// Component users buttons form create group
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/CreateGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class CreateGroupFormUsersButtons extends React.Component {
  handleAddClick() {
    this.props.removeUsers(this.props.users, this.props.preSelectedUsers);
    this.props.addUsersToGroup(this.props.selectedUsers.concat(this.props.preSelectedUsers));
  }

  handleRemoveClick() {
    this.props.removeUsersFromGroup(this.props.selectedUsers, this.props.unselectedUsers);
    this.props.getUsers(this.props.users.concat(this.props.unselectedUsers));
  }

  render() {
    return (
      <ButtonToolbar className={styles.usersToolbar}>
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.usersButtons} buttonText=">" onClick={() => this.handleAddClick()} />
        <LinkContainerButton buttonBsStyle="default" buttonStyle={styles.usersButtons} buttonText="<" onClick={() => this.handleRemoveClick()} />
      </ButtonToolbar>
    );
  }
}

CreateGroupFormUsersButtons.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  preSelectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  unselectedUsers: React.PropTypes.arrayOf(React.PropTypes.object),
  getUsers: React.PropTypes.func,
  addUsersToGroup: React.PropTypes.func,
  removeUsers: React.PropTypes.func,
  removeUsersFromGroup: React.PropTypes.func,
};
