//
// Component EditUser
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader, Radio } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import RadioGroup from '../RadioGroup';
import styles from './styles.css';

export class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
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

  onChangeGroups(name, event) {
    if (event == 'Out') {
      for (var i = 0; i < this.props.state.groups.length; i++) {
        if (this.user.groups[i].name == name) {
          this.user.groups.splice(i, 1);
          break;
        }
      }
    }
    else if (event == 'In') {
      for (var i = 0; i < this.props.state.groups.length; i++) {
        if (this.props.state.groups[i].name == name) {
          this.user.groups.push(this.props.state.groups[i]);
          break;
        }
      }
    }
  }

  handleClick(event) {
    var users = [];
    users.push(this.user);
    this.props.editUserAdminRequest(users);
  }

  render() {
    var admin = 1;

    var groupForm = [];
    if (this.props.state.usersGroups != null) {
      var usersGroups = this.props.state.usersGroups;
      this.props.state.groups.map((group, i) => {
        groupForm.push(<p>{group.name}</p>);
        groupForm.push(<RadioGroup inline id={group.name} values={['In', 'Out']} placeholder={(usersGroups[i] == true) ? 'In' : 'Out'} onChange={this.onChangeGroups.bind(this, group.name)} />);
      });

      var groupDisplay = [];
      var groups = this.props.state.user.groups;
      groups.map(function(group, i) {
        groupDisplay.push(<p>{group.name}</p>);
      });
      var resGroups = (admin == 0 ? groupDisplay : groupForm);
    } else {
      var resGroup = [];
    }
    this.user.id = this.props.state.user.id;
    this.user.name = this.props.state.user.name;
    this.user.email = this.props.state.user.email;
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
            <br />
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
