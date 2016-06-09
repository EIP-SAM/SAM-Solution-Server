//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, PageHeader, Image } from 'react-bootstrap';
import styles from 'components/ChangePassword/styles.css';

export default class LoginContainer extends React.Component {
  getInitialState() {
    return {oldPassword: '', password: '', passwordConfirm: ''};
  }

  handleOldPasswordChange(e) {
    this.setState({oldPassword: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handlePasswordConfirmChange(e) {
    this.setState({passwordConfirm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    var oldPassword = this.state.oldPassword;
    var password = this.state.password;
    var passwordConfirm = this.state.passwordConfirm;
    if (!oldPassword || !password || !passwordConfirm) {
      return;
    }
    // call function to set new password
    this.setState({oldPassword: '', password: '', passwordConfirm: ''});
  }

  render() {
    return (
        <div container className={styles.change}>
          <form>
            <PageHeader>Change password</PageHeader>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Enter text"/>
              <ControlLabel>New password</ControlLabel>
              <FormControl type="password" placeholder="Enter text"/>
              <ControlLabel>New password confirmation</ControlLabel>
              <FormControl type="password" placeholder="Enter text"/>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        </div>
    );
  }
}
