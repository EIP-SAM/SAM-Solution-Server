//
// Component CreateUser
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import styles from './styles.css';

export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChangeUsername(event) {
    this.user.name = event.target.value;
  }

  onChangeEmail(event) {
    this.user.email = event.target.value;
  }

  onChangePassword(event) {
    this.user.password = event.target.value;
  }

  onChangeConfirmation(event) {
    this.user.confirmation = event.target.value;
  }

  handleClick(event) {
    var users = [];
    users.push(this.user);
    console.log('###' + this.user);
    this.props.createUserRequest(users);
  }

  render() {
    return (
      <div container className={styles.createUser}>
        <form>
          <PageHeader>Create user</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder='Enter you username' onChange={this.onChangeUsername} />
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder='Enter you email address' onChange={this.onChangeEmail} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder='Enter your password' onChange={this.onChangePassword} />
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type="password" placeholder='Enter you password confirmation' onChange={this.onChangeConfirmation} />
            <br />
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

CreateUser.propTypes = {
  state: React.PropTypes.object,
  createUserRequest: React.PropTypes.func,
}
