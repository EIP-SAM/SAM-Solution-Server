//
// Component email form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/CreateUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormEmail extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(event) {
    this.props.emailChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.emailError !== '') {
      validationState = 'error';
      errorMessage = this.props.emailError;
    }

    return (
      <FormGroup controlId="email" className={styles.form} validationState={validationState}>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="email" value={this.props.email} placeholder="Enter email address" onChange={this.onChangeEmail} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

CreateUserFormEmail.propTypes = {
  email: React.PropTypes.string,
  emailChange: React.PropTypes.func,
  emailError: React.PropTypes.string,
};
