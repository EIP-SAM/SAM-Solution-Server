//
// Component password confirmation form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from '../../styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormPasswordConfirmationFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
  }

  onChangeConfirmation(event) {
    this.props.passwordConfirmationChange(event.target.value);
  }

  render() {
    let validationState = null;

    return (
      <FormGroup controlId="passwordConfirmation" className={styles.form} validationState={validationState}>
        <ControlLabel>Password confirmation</ControlLabel>
        <FormControl type="password" value={this.props.passwordConfirmation} placeholder="Enter password confirmation" onChange={this.onChangeConfirmation} />
      </FormGroup>
    );
  }
}
// <HelpBlock>{errorMessage}</HelpBlock>

CreateUserFormPasswordConfirmationFormGroup.propTypes = {
  passwordConfirmation: React.PropTypes.string,
  passwordConfirmationChange: React.PropTypes.func,
};
