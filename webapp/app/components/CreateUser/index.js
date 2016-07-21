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
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChangeUsername(event) {
    this.props.onChangeData(event.target.value, this.props.state.email, this.props.state.password, this.props.state.confirmation);
  }

  onChangeEmail(event) {
    this.props.onChangeData(this.props.state.username, event.target.value, this.props.state.password, this.props.state.confirmation);
  }

  onChangePassword(event) {
    this.props.onChangeData(this.props.state.username, this.props.state.email, event.target.value, this.props.state.confirmation);
  }

  onChangeConfirmation(event) {
    this.props.onChangeData(this.props.state.username, this.props.state.email, this.props.state.password, event.target.value);
  }

  handleClick(event) {
    this.props.createUserRequest(this.props.state.username, this.props.state.email, this.props.state.password, this.props.state.confirmation);
  }

  render() {
    return (
      <div container className={styles.createUser}>
        <form>
          <PageHeader>Create user</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="email" value={this.props.state.username} onChange={this.onChangeUsername} />
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" value={this.props.state.email} onChange={this.onChangeEmail} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" value={this.props.state.password} onChange={this.onChangePassword} />
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type="password" value={this.props.state.confirmation} onChange={this.onChangeConfirmation} />
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
  onChangeData: React.PropTypes.func,
}
