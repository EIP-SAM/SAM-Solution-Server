//
// Component email form in create user page
//

import React from 'react';
import { browserHistory } from 'react-router';
import { ButtonToolbar } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/CreateUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class CreateUserFormButtons extends React.Component {
  static handleCancelClick() {
    browserHistory.goBack();
  }

  handleCreateClick(event) {
    event.preventDefault();

    if (this.props.username !== '' && this.props.email !== '' &&
        this.props.password !== '' && this.props.passwordConfirmation !== '') {
      this.props.createUserRequest(this.props.username, this.props.email, this.props.password, this.props.passwordConfirmation, this.props.selectedGroup);
    }
    if (this.props.username === '') {
      this.props.usernameErrorMsg('A user must have a name');
    }
    if (this.props.email === '') {
      this.props.emailErrorMsg('A user must have an email');
    }
    if (this.props.password === '') {
      this.props.passwordErrorMsg('A user must have a password');
    }
    if (this.props.passwordConfirmation === '') {
      this.props.passwordConfirmationErrorMsg('Please confirmation your password');
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Create" onClick={event => this.handleCreateClick(event)} />
        <LinkContainerButton buttonBsStyle="default" buttonText="Cancel" onClick={() => CreateUserFormButtons.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

CreateUserFormButtons.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  passwordConfirmation: React.PropTypes.string,
  selectedGroup: React.PropTypes.arrayOf(React.PropTypes.string),
  createUserRequest: React.PropTypes.func,
  usernameErrorMsg: React.PropTypes.func,
  emailErrorMsg: React.PropTypes.func,
  passwordErrorMsg: React.PropTypes.func,
  passwordConfirmationErrorMsg: React.PropTypes.func,
};
