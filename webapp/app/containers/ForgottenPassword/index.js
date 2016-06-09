//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, PageHeader, Image } from 'react-bootstrap';
import styles from 'components/ForgottenPassword/styles.css';

export default class LoginContainer extends React.Component {
  getInitialState() {
    return {email: ''};
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    var email = this.state.email;
    if (!email) {
      return;
    }
    // call function to send email with new password
    this.setState({email: ''});
  }

  render() {
    return (
        <div container className={styles.forgotten}>
          <form>
            <PageHeader>Forgotten password</PageHeader>
            <p>You will receive an email to change your password.</p>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="text" placeholder="Enter text"/>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        </div>
    );
  }
}
