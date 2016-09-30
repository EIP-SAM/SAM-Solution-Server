//
// Component email form in create user page
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/EditUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditUserFormButtons extends React.Component {

  handleEditClick() {
    if (this.props.username !== '' && this.props.email !== '') {
      this.props.editUserRequest(this.props.userId, this.props.username, this.props.email, this.props.password, this.props.passwordConfirmation, this.props.userGroups);
    }
    if (this.props.username === '') {
      this.props.usernameErrorMsg('A user must have a name');
    }
    if (this.props.email === '') {
      this.props.emailErrorMsg('A user must have an email');
    }
    /* if (this.props.password === '') {
      this.props.passwordErrorMsg('A user must have a password');
    }
    if (this.props.passwordConfirmation === '') {
      this.props.passwordConfirmationErrorMsg('Please confirmation your password');
    }*/
  }

  handleCancelClick() {
    browserHistory.goBack();
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Edit" onClick={() => this.handleEditClick()} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
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
  passwordErrorMsg: React.PropTypes.func,
  passwordConfirmationErrorMsg: React.PropTypes.func,
};