//
// Component password confirmation form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/CreateUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormPasswordConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
  }

  onChangeConfirmation(event) {
    this.props.passwordConfirmationChange(event.target.value);
  }

  render() {
    let validationState = null;
    let errorMessage = '';

    if (this.props.passwordConfirmationError !== '') {
      validationState = 'error';
      errorMessage = this.props.passwordConfirmationError;
    }


    return (
      <FormGroup controlId="passwordConfirmation" className={styles.form} validationState={validationState}>
        <ControlLabel>Password confirmation</ControlLabel>
        <FormControl type="password" value={this.props.passwordConfirmation} placeholder="Enter password confirmation" onChange={this.onChangeConfirmation} />
        <HelpBlock>{errorMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

CreateUserFormPasswordConfirmation.propTypes = {
  passwordConfirmation: React.PropTypes.string,
  passwordConfirmationError: React.PropTypes.string,
  passwordConfirmationChange: React.PropTypes.func,
};
