//
// Component email form in create user page
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from '../../styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormButtons extends React.Component {

  handleCreateClick() {
    this.props.createUserRequest(this.props.username, this.props.email, this.props.password, this.props.passwordConfirmation);
  }

  handleCancelClick() {

  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="info" buttonText="Create" onClick={() => this.handleCreateClick()} />
        <LinkContainerButton buttonType="default" buttonText="Cancel" onClick={() => this.handleCancelClick()} />
      </ButtonToolbar>
    );
  }
}

CreateUserFormButtons.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  passwordConfirmation: React.PropTypes.string,
  createUserRequest: React.PropTypes.func,
};
