//
// Component form page edit user
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import { LinkContainerButton } from 'components/Button';
import RadioGroup from 'components/RadioGroup';
import styles from 'components/EditUser/styles.css';

/* eslint-disable react/prefer-stateless-function */
export class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmation = this.onChangeConfirmation.bind(this);
    this.onChangeGroups = this.onChangeGroups.bind(this);
  }

  componentWillMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getUserRequest(id);
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
          break;
        }
      }
    }
  }

  handleClick() {
    const user = {};
    const groups = [];
    this.user.groups.map((group) => {
      groups.push(group.name);
    });
    user.id = this.user.id;
    user.name = this.user.name;
    user.email = this.user.email;
    if (this.user.password) {
      user.password = this.user.password;
    }
    if (this.user.confirmation) {
      user.confirmation = this.user.confirmation;
    }
    user.groups = groups;
    this.props.editUserRequest(user);
  }

  render() {
    const groupForm = [];

    if (!this.props.state) {
      return (<p>loading...</p>);
    }
    this.user = this.props.state.user;

    if (this.props.state.groups) {
      const usersGroups = this.props.state.usersGroups;
      this.props.state.groups.map((group, i) =>
        groupForm.push(
          <Col key={i} xs={12} className={styles.editUserRightLine}>
            <Col xs={4} className={styles.editUserName}>{group.name}</Col>
            <RadioGroup inline id={group.name} values={['in', 'out']} placeholder={(usersGroups[i] === true) ? 'in' : 'out'} onChange={this.onChangeGroups} />
          </Col>
        ));
    }

    return (
      <div>
        <FormGroup controlId="formBasicText">
          <FormGroup className={styles.form}>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder={this.user.name} onChange={this.onChangeUsername} />
          </FormGroup>
          <FormGroup className={styles.form}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder={this.user.email} onChange={this.onChangeEmail} />
          </FormGroup>
          <FormGroup className={styles.form}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="********" onChange={this.onChangePassword} />
          </FormGroup>
          <FormGroup className={styles.form}>
            <ControlLabel>Password confirmation</ControlLabel>
            <FormControl type="password" placeholder="********" onChange={this.onChangeConfirmation} />
          </FormGroup>
          <br />
          <ControlLabel>Groups</ControlLabel>
          {groupForm}
          <br />
          <LinkContainerButton buttonType="default" buttonText="Edit" onClick={() => this.handleClick()} />
        </FormGroup>
      </div>
    );
  }
}

EditUserForm.propTypes = {
  state: React.PropTypes.object,
  getUserRequest: React.PropTypes.func,
  editUserRequest: React.PropTypes.func,
  getGroupsRequest: React.PropTypes.func,
};
