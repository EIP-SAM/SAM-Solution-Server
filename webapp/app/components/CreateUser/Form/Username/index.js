//
// Component username form in create user page
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styles from 'components/CreateUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class CreateUserFormUsername extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  onChangeUsername(event) {
    this.props.usernameChange(event.target.value);
  }

  render() {
    let validationState = null;

    if (this.props.usernameError !== '') {
      validationState = 'error';
    }

    return (
      <FormGroup controlId="username" className={styles.form} validationState={validationState}>
        <ControlLabel>Username</ControlLabel>
        <FormControl type="text" value={this.props.username} placeholder="Enter username" onChange={this.onChangeUsername} />
        <HelpBlock>{this.props.usernameError}</HelpBlock>
      </FormGroup>
    );
  }
}

CreateUserFormUsername.propTypes = {
  username: React.PropTypes.string,
  usernameError: React.PropTypes.string,
  usernameChange: React.PropTypes.func,
};
