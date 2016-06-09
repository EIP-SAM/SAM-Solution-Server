//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, PageHeader, Image } from 'react-bootstrap';
import Logo from '../App/logo_sam_solution.png';
import styles from 'components/Login/styles.css';

export default class LoginContainer extends React.Component {
  getInitialState() {
    return {username: '', password: ''};
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    var username = this.state.username;
    var password = this.state.password;
    if (!username || !password) {
      return;
    }
    // call function to log in
    this.setState({username: '', password: ''});
  }

  render() {
    return (
        <div container className={styles.login}>
        <Image src={Logo} responsive className={styles.logo} />
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" placeholder="Enter text"/>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Enter text"/>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
          <a href="">Forget password</a>
        </div>
    );
  }
}
