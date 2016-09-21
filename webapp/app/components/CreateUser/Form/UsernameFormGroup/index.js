//
// Component username form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from '../../styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormUsernameFormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  onChangeUsername(event) {
    this.props.usernameChange(event.target.value);
  }

  render() {
    let validationState = null;

    return (
      <FormGroup controlId="username" className={styles.form} validationState={validationState}>
        <ControlLabel>Username</ControlLabel>
        <FormControl type="text" value={this.props.username} placeholder="Enter username" onChange={this.onChangeUsername} />
      </FormGroup>
    );
  }
}
// <HelpBlock>{errorMessage}</HelpBlock>

CreateUserFormUsernameFormGroup.propTypes = {
  username: React.PropTypes.string,
  usernameChange: React.PropTypes.func,
};
