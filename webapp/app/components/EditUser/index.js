//
// Component EditUser
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader, Col } from 'react-bootstrap';
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
    var admin = 1;
    var username = 'test';

    var groupForm = [];
    if (!this.props.state) {
      return(<p>loading...</p>);
    }
    if (this.props.state.groups) {
      var usersGroups = this.props.state.usersGroups;
      this.props.state.groups.map((group, i) => {
        groupForm.push(
          <Col key={i} xs={12} className={styles.editUserRightLine}>
            <Col xs={4} className={styles.editUserName}>{group.name}</Col>
            <RadioGroup inline id={group.name} values={['in', 'out']} placeholder={(usersGroups[i] === true) ? 'in' : 'out'} onChange={this.onChangeGroups.bind(this, group.name)} />
          </Col>
        );
      });

      var groupDisplay = [];
      var groups = this.props.state.user.groups;
      groups.map(function(group, i) {
        groupDisplay.push(<p>{group.name}</p>);
      });
      var resGroups = (admin == 0 ? groupDisplay : groupForm);
    } else {
      var resGroups = [];
    }

    var exist = true;
    var access = true;
    if (this.props.state.user.error) {
      exist = false;
    } else {
      this.user.id = this.props.state.user.id;
      this.user.name = this.props.state.user.name;
      this.user.email = this.props.state.user.email;
      this.setGroups(this.user, this.props.state.user.groups);
      if (admin == 0 && this.user.name != username) {
        access = false;
      }
    }

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
          <h3>Error : you must be admin to access this page</h3>
        </div>
      );
    }
    return (
      <div container className={styles.editUser}>
        <form>
          <PageHeader>Edit user</PageHeader>
          <FormGroup controlId="formBasicText">
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" placeholder={this.user.name} onChange={this.onChangeUsername} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" placeholder={this.user.email} onChange={this.onChangeEmail} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder='********' onChange={this.onChangePassword} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password confirmation</ControlLabel>
              <FormControl type="password" placeholder='********' onChange={this.onChangeConfirmation} />
            </FormGroup>
            <br />
            <ControlLabel>Groups</ControlLabel>
            { resGroups }
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
