//
// Component buttons in login page
//

import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import styles from 'components/Login/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class LoginFormButtons extends React.Component {

  handleLoginClick(event) {
    event.preventDefault();
    if (this.props.username !== '' && this.props.password !== '') {
      this.props.loginRequest(this.props.username, this.props.password);
    }
    if (this.props.username === '') {
      this.props.usernameErrorMsg('Empty username');
    }
    if (this.props.password === '') {
      this.props.passwordErrorMsg('Empty password');
    }
  }

  render() {
    return (
      <ButtonToolbar className={styles.toolbar}>
        <LinkContainerButton buttonType="submit" buttonBsStyle="info" buttonText="Login" onClick={(event) => this.handleLoginClick(event)} />
      </ButtonToolbar>
    );
  }
}

LoginFormButtons.propTypes = {
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  loginRequest: React.PropTypes.func,
  usernameErrorMsg: React.PropTypes.func,
  passwordErrorMsg: React.PropTypes.func,
};
