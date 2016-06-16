//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, PageHeader } from 'react-bootstrap';
import styles from 'components/EditProfile/styles.css';

export default class LoginContainer extends React.Component {
  getInitialState() {
    return { oldPassword: '', password: '', passwordConfirm: '' };
  }

  handleOldPasswordChange(e) {
    this.setState({ oldPassword: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirmChange(e) {
    this.setState({ passwordConfirm: e.target.value });
  }

  handleSubmit(e) {
    const oldPassword = this.state.oldPassword;
    const password = this.state.password;
    const passwordConfirm = this.state.passwordConfirm;
    e.preventDefault();
    if (!oldPassword || !password || !passwordConfirm) {
      return;
    }
    // call function to edit profile
    this.setState({ oldPassword: '', password: '', passwordConfirm: '' });
  }

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
            <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
