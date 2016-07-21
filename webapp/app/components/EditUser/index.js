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
    this.done = 0;
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUserRequest();
  }

  componentWillReceiveProps(prop) {
    const username = window.location.pathname.split('/')[2];
    if (prop.state.currentUser.isAdmin == true && this.done == 0) {
      this.props.getUserRequest(username, this.props.getGroupsRequest);
      this.done = 1;
    }
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
    var check = 1;
    if (event == 'out') {
      for (var i = 0; i < this.user.groups.length; i++) {
        if (this.user.groups[i] == name) {
          this.user.groups.splice(i, 1);
          console.log(this.user.groups);
          break;
        }
      }
    }
    else if (event == 'in') {
      for (var i = 0; i < this.props.state.groups.length; i++) {
        if (this.props.state.groups[i].name == name) {
          for (var j = 0; j < this.user.groups.length; j++) {
            if (this.user.groups[i] == name) {
              check = 0;
              break;
            }
          }
          if (check == 1) {
            this.user.groups.push(this.props.state.groups[i].name);
          }
          console.log(this.user.groups);
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

  setGroups(user, groups) {
    var res = [];
    for (var i = 0; i < groups.length; i++) {
      res.push(groups[i].name);
    }
    user.groups = res;
  }

  render() {
    var exist = true;
    var access = true;

    var groupForm = [];
    if (!this.props.state) {
      return(<p>loading...</p>);
    }

    if (!this.props.state.user) {
      this.user.id = this.props.state.currentUser.id;
      this.user.name = this.props.state.currentUser.name;
      this.user.email = this.props.state.currentUser.email;
      this.setGroups(this.user, this.props.state.currentUser.groups);
      if (this.props.state.currentUser.isAdmin == false && this.user.name != window.location.pathname.split('/')[2]) {
        access = false;
      }
    }
    else if (this.props.state.user.error) {
      exist = false;
    } else {
      this.user.id = this.props.state.user.id;
      this.user.name = this.props.state.user.name;
      this.user.email = this.props.state.user.email;
      this.setGroups(this.user, this.props.state.user.groups);
    }

    if (this.props.state.groups) {
      var usersGroups = this.props.state.usersGroups;
      this.props.state.groups.map((group, i) => {
        groupForm.push(<p>{group.name}</p>);
        groupForm.push(<RadioGroup inline id={group.name} values={['in', 'out']} placeholder={(usersGroups[i] == true) ? 'in' : 'out'} onChange={this.onChangeGroups.bind(this, group.name)} />);
      });
    }

    var groupDisplay = [];
    var groups = this.props.state.currentUser.groups;
    groups.map(function(group, i) {
      groupDisplay.push(<p>{group.name}</p>);
    });
    var resGroups = (this.props.state.currentUser.isAdmin == false ? groupDisplay : groupForm);

    if (exist == false) {
      return (
        <div>
          <h3>{this.props.state.user.error}</h3>
        </div>
      );
    }
    if (access == false) {
      return (
        <div>
          <h3>Error :  access not allowed</h3>
        </div>
      );
    }
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
            <LinkContainerButton buttonType='default' buttonText='Edit' onClick={this.handleClick} />
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
