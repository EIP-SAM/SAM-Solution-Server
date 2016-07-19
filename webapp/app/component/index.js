//
// Component EditUser
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader, Radio } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import { RadioGroup } from '../RadioGroup';
import styles from './styles.css';

export class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.onChangeGroups = this.onChangeGroups.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const username = window.location.pathname.split('/')[2];
    this.props.getUserRequest(username, this.props.getGroupsRequest);
//    this.props.getCurrentUserRequest();
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

  onChangeGroups(event) {
    if (event.target.value == false) {
      for (var i; i = 0; i < this.user.groups) {
        if (this.user.groups[i].name == event.target.id) {
          this.user.groups.splice(i, 1);
          break;
        }
      }
    }
    else {
      for (var i; i = 0; i < this.props.state.groups) {
        if (this.props.state.groups[i].name == event.target.id) {
          this.user.groups.push(this.props.state.groups[i]);
          break;
        }
      }
    }
  }

  handleClick(event) {
    var users = new Array();
    users.push(this.user);
    var obj = {users: users};
    this.props.editUserAdminRequest(obj);
  }

  render() {
    var admin = 1;

    var groupForm = [];
    if (this.props.state.usersGroups != null) {
      var usersGroups = this.props.state.usersGroups;

      // console.log('STATE');
      // console.log(this.props.state);
      this.props.state.user.groups.map(function(group, i) {
        console.log('THIS');
        console.log(this);
        groupForm.push(<p>{group.name}</p>);
        groupForm.push(<RadioGroup id={group.name} values={['In', 'Out']} placeholder='In' onChange={() => this.onChangeGroups} />);
      });

      var groupDisplay = [];
      var groups = this.props.state.user.groups;
      groups.map(function(group, i) {
        groupDisplay.push(<p>{group.name}</p>);
      });
      // {(usersGroups[i] == true) ? 'In' : 'Out'}
      var resGroups = (admin == 0 ? groupDisplay : groupForm);
    } else {
      var resGroup = [];
    }
    this.user.id = this.props.state.user.id;
    this.user.name = this.props.state.user.name;
    this.user.email = this.props.state.user.email;
    this.user.password = this.props.state.user.password;
    this.user.confirmation = this.props.state.user.confirmation;
    this.user.groups = this.props.state.user.groups;
    return (
      <div container className={styles.editUser}>
        <form>
          <PageHeader>Edit user</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder={this.user.name} onChange={this.onChangeUsername} />
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder={this.user.email} onChange={this.onChangeEmail} />
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder='********' onChange={this.onChangePassword} />
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type="password" placeholder='********' onChange={this.onChangeConfirmation} />
            <br />
            <ControlLabel>Groups</ControlLabel>
            { resGroups }
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
  editUserAdminRequest: React.PropTypes.func,
  editUserRequest: React.PropTypes.func,
  getGroupsRequest: React.PropTypes.func,
};
