//
// Login
//

import React from 'react';
import { FormGroup, FormControl, Button, ControlLabel, PageHeader } from 'react-bootstrap';
import Logo from '../App/logo_sam_solution.png';
import styles from 'components/Login/styles.css';

export default class LoginContainer extends React.Component {
  render() {
    return (
        <div className={styles.login}>
          <PageHeader>Log in</PageHeader>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" placeholder="Enter text"/>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Enter text"/>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        </div>
    );
  }
}
