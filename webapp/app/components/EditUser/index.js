//
// Component EditUser
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import styles from './styles.css';

export class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getUserRequest(username);
    // this.props.getCurrentUserRequest();
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
    this.props.editUserRequest(this.props.state.username, this.props.state.email, this.props.state.password, this.props.state.confirmation);
  }

  render() {
    return (
      <div container className={styles.editUser}>
        <form>
          <PageHeader>Edit user</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" value={this.props.state.displayedUsername} onChange={this.onChangeUsername} />
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" value={this.props.state.displayedEmail} onChange={this.onChangeEmail} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" value='Password' onChange={this.onChangePassword} />
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type="password" value='Password' onChange={this.onChangeConfirmation} />
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

EditUser.propTypes = {
  state: React.PropTypes.object,
  onChangeData: React.PropTypes.func,
  getUserRequest: React.PropTypes.func,
  getCurrentUserRequest: React.PropTypes.func,
  editUserRequest: React.PropTypes.func,
};

// let adminField;
// if (this.props.state.isAdmin == true) {
//   adminField = (
//     <p>Si pas admin ce texte est invisible</p>
//   )
// }

// { adminField  }
