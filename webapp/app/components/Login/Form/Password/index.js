//
// Component password form in login page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import styles from 'components/Login/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangePassword(event) {
    this.props.passwordChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.passwordError !== '') {
      validationState = 'error';
      errorMessage = this.props.passwordError;
    }

    return (
      <FormGroup controlId="password" className={styles.form} validationState={validationState}>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" value={this.props.password} placeholder="Password" onChange={this.onChangePassword} />
        <LinkContainerButton buttonStyle={styles.forgottenLink} buttonBsStyle="link" buttonText="Forgotten?" link="/forgotten-password" />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

LoginFormPassword.propTypes = {
  password: React.PropTypes.string,
  passwordError: React.PropTypes.string,
  passwordChange: React.PropTypes.func,
};
