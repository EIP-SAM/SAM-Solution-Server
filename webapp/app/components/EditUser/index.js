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
    if (prop.state.currentUser.isAdmin === true && this.done === 0) {
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
    let check = 1;
    if (event === 'out') {
      for (let i = 0; i < this.user.groups.length; i++) {
        if (this.user.groups[i] === name) {
          this.user.groups.splice(i, 1);
          console.log(this.user.groups);
          break;
        }
      }
    } else if (event === 'in') {
      for (let i = 0; i < this.props.state.groups.length; i++) {
        if (this.props.state.groups[i].name === name) {
          for (let j = 0; j < this.user.groups.length; j++) {
            if (this.user.groups[i] === name) {
              check = 0;
              break;
            }
          }
          if (check === 1) {
            this.user.groups.push(this.props.state.groups[i].name);
          }
          console.log(this.user.groups);
          break;
        }
      }
    }
  }

  setGroups(user, groups) {
    const res = [];
    for (let i = 0; i < groups.length; i++) {
      res.push(groups[i].name);
    }
    user.groups = res;
  }

  handleClick() {
    const users = [];
    users.push(this.user);
    if (!this.props.state.currentUser.isAdmin) {
      this.props.editUserRequest(this.user);
    } else {
      this.props.editUserAdminRequest(users);
    }
  }

  render() {
    let exist = true;
    let access = true;

    const groupForm = [];
    if (!this.props.state) {
      return (<p>loading...</p>);
    }

    if (!this.props.state.user) {
      this.user.id = this.props.state.currentUser.id;
      this.user.name = this.props.state.currentUser.name;
      this.user.email = this.props.state.currentUser.email;
      this.setGroups(this.user, this.props.state.currentUser.groups);
      if (this.props.state.currentUser.isAdmin === false && this.user.name !== window.location.pathname.split('/')[2]) {
        access = false;
      }
    } else if (this.props.state.user.error) {
      exist = false;
    } else {
      this.user.id = this.props.state.user.id;
      this.user.name = this.props.state.user.name;
      this.user.email = this.props.state.user.email;
      this.setGroups(this.user, this.props.state.user.groups);
    }

    if (this.props.state.groups) {
      const usersGroups = this.props.state.usersGroups;
      this.props.state.groups.map((group, i) =>
        groupForm.push(
          <Col key={i} xs={12} className={styles.editUserRightLine}>
            <Col xs={4} className={styles.editUserName}>{group.name}</Col>
            <RadioGroup inline id={group.name} values={['in', 'out']} placeholder={(usersGroups[i] === true) ? 'in' : 'out'} onChange={this.onChangeGroups.bind(this, group.name)} />
          </Col>
        ));
    }

    const groupDisplay = this.props.state.currentUser.groups.map((group) =>
      <p>{group.name}</p>
    );
    const resGroups = (this.props.state.currentUser.isAdmin === false) ? groupDisplay : groupForm;

    if (exist === false) {
      return (
        <div>
          <h3>{this.props.state.user.error}</h3>
        </div>
      );
    }
    if (access === false) {
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
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl type="text" value={this.user.name} onChange={this.onChangeUsername} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" value={this.user.email} onChange={this.onChangeEmail} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" value="********" onChange={this.onChangePassword} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password confirmation</ControlLabel>
              <FormControl type="password" value="********" onChange={this.onChangeConfirmation} />
            </FormGroup>
            <br />
            <ControlLabel>Groups</ControlLabel>
            {resGroups}
            <LinkContainerButton buttonType="default" buttonText="Edit" onClick={this.handleClick} />
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
