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
    this.onChangeGroups = this.onChangeGroups.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getUserRequest(id, this.props.getGroupsRequest);
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

  handleClick(event) {
    this.props.editUserRequest(this.user);
  }

  render() {
    this.user = this.props.state.user;
    var groupForm = [];

    if (!this.props.state) {
      return (<p>loading...</p>);
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
            { groupForm }
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
  getUserRequest: React.PropTypes.func,
  editUserRequest: React.PropTypes.func,
  getGroupsRequest: React.PropTypes.func,
  getCurrentUserRequest: React.PropTypes.func,
};
