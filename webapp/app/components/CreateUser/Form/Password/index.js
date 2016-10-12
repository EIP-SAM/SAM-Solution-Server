//
// Component password form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/CreateUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormPassword extends React.Component {
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
        <FormControl type="password" value={this.props.password} placeholder="Enter password" onChange={this.onChangePassword} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

CreateUserFormPassword.propTypes = {
  password: React.PropTypes.string,
  passwordError: React.PropTypes.string,
  passwordChange: React.PropTypes.func,
};
