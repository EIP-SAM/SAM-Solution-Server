//
// Component email form in create user page
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/EditUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditUserFormButtons extends React.Component {
  static handleCancelClick() {
    browserHistory.goBack();
  }

  handleEditClick(event) {
    event.preventDefault();

    if (this.props.username !== '' && this.props.email !== '') {
      this.props.editUserRequest(this.props.userId, this.props.username, this.props.email, this.props.password, this.props.passwordConfirmation, this.props.userGroups);
    }
    if (this.props.username === '') {
      this.props.usernameErrorMsg('A user must have a name');
    }
    if (this.props.email === '') {
      this.props.emailErrorMsg('A user must have an email');
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Edit" onClick={event => this.handleEditClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => EditUserFormButtons.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

EditUserFormButtons.propTypes = {
  userId: React.PropTypes.number,
  username: React.PropTypes.string,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  passwordConfirmation: React.PropTypes.string,
  userGroups: React.PropTypes.array,
  editUserRequest: React.PropTypes.func,
  usernameErrorMsg: React.PropTypes.func,
  emailErrorMsg: React.PropTypes.func,
};
