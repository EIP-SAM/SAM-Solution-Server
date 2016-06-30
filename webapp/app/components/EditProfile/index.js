//
// Login
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import styles from 'components/EditProfile/styles.css';

export default class LoginContainer extends React.Component {

  render() {
    return (
      <div container className={styles.change}>
        <form>
          <PageHeader>Edit Profile</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder="Enter text" />
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="Enter text" />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Enter text" />
            <ControlLabel>New password</ControlLabel>
            <FormControl type="password" placeholder="Enter text" />
            <ControlLabel>New password confirmation</ControlLabel>
            <FormControl type="password" placeholder="Enter text" />
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}
