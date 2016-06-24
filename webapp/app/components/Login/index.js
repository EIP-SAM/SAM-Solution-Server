//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, Image } from 'react-bootstrap';
import Logo from '../App/logo_sam_solution.png';
import styles from 'components/Login/styles.css';

export class Login extends React.Component {

  componentDidMount() {
    this.props.loginRequest("toto", "toto");
  }

  render() {
    return (
      <div container className={styles.login}>
        <Image src={Logo} responsive className={styles.logo} />
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" name="username" placeholder="Enter text" />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" name="password" placeholder="Enter text" />
            <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
        <a href="">Forget password</a>
      </div>
    );
  }
}

Login.propTypes = {
  state: React.PropTypes.object,
  loginRequest: React.PropTypes.func,
}
