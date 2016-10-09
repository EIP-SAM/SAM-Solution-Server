//
// Component EditGroup
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader, Col } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import RadioGroup from '../RadioGroup';
import styles from './styles.css';

export class EditGroup extends React.Component {
  constructor(props) {
    super(props);
    this.group = {};
    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeSaveAndRestoreMode = this.onChangeSaveAndRestoreMode.bind(this);
    this.onChangeMigrationMode = this.onChangeMigrationMode.bind(this);
    this.onChangeSoftwarePackagesMode = this.onChangeSoftwarePackagesMode.bind(this);
    this.onChangeUsers = this.onChangeUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getGroupRequest(id, this.props.getUsersRequest);
  }

  onChangeGroupname(event) {
    this.group.name = event.target.value;
  }

  onChangeSaveAndRestoreMode(event) {
    this.group.saveAndRestoreMode = parseInt(event.target.value);
  }

  onChangeMigrationMode(event) {
    this.group.migrationMode = parseInt(event.target.value);
  }

  onChangeSoftwarePackagesMode(event) {
    this.group.softwarePackagesMode = parseInt(event.target.value);
  }

  onChangeUsers(name, id, event) {
    var check = 1;
    if (event == 'out') {
      for (var i = 0; i < this.group.users.length; i++) {
        if (this.group.users[i] == id) {
          this.group.users.splice(i, 1);
          break;
        }
      }
    }
    else if (event == 'in') {
      for (var i = 0; i < this.props.state.users.length; i++) {
        if (this.props.state.users[i].name == name) {
          for (var j = 0; j < this.group.users.length; j++) {
            if (this.group.users[i] == id) {
              check = 0;
              break;
            }
          }
          if (check == 1) {
            this.group.users.push(this.props.state.users[i].id);
          }
          break;
        }
      }
    }
  }

  handleClick(event) {
    var group = {};
    var users = [];
    this.group.users.map(function(user) {
      users.push(user.id);
    });
    group.id = this.group.id;
    group.name = this.group.name;
    group.saveAndRestoreMode = this.group.saveAndRestoreMode;
    group.migrationMode = this.group.migrationMode;
    group.softwarePackagesMode = this.group.softwarePackagesMode;
    group.users = users;
    this.props.editGroupRequest(group);
  }

  setUsers(group, users) {
    var res = [];
    for (var i = 0; i < users.length; i++) {
      res.push(users[i].id);
    }
    group.users = res;
  }

  getMode(id, value) {
    if (id == value)
      return 'Simple';
    return 'Advanced';
  }

  getValue(id, value) {
    if (id == value)
      return '1';
    return '2';
  }

  render() {
    var userForm = [];

    if (!this.props.state) {
      return(<p>loading...</p>);
    }

    this.group = this.props.state.group;

    if (this.props.state.users) {
      var usersGroups = this.props.state.usersGroups;
      this.props.state.users.map((user, i) => {
        userForm.push(
          <Col key={i} xs={12} className={styles.editGroupRightLine}>
            <Col xs={4} className={styles.editGroupName}>{user.name}</Col>
            <RadioGroup inline id={user.name} values={['in', 'out']} placeholder={(usersGroups[i] == true) ? 'in' : 'out'} onChange={this.onChangeUsers.bind(this, user.name, user.id)} />
          </Col>
        );
      });
    }

    return (
      <div className={styles.editGroup}>
        <form>
          <PageHeader>Edit Group</PageHeader>
          <FormGroup controlId="formBasicText">
            <FormGroup>
              <ControlLabel>Group name</ControlLabel>
              <FormControl type="text" placeholder={this.group.name} onChange={this.onChangeGroupname} />
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Save and restore mode</ControlLabel>
              <FormControl componentClass="select" placeholder={this.group.saveAndRestoreMode} onChange={this.onChangeSaveAndRestoreMode}>
                <option value={this.getValue(1, this.group.saveAndRestoreMode)}>{this.getMode(1, this.group.saveAndRestoreMode)}</option>
                <option value={this.getValue(2, this.group.saveAndRestoreMode)}>{this.getMode(2, this.group.saveAndRestoreMode)}</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Migration mode</ControlLabel>
              <FormControl componentClass="select" placeholder={this.group.migrationMode} onChange={this.onChangeMigrationMode}>
                <option value={this.getValue(1, this.group.migrationMode)}>{this.getMode(1, this.group.migrationMode)}</option>
                <option value={this.getValue(2, this.group.migrationMode)}>{this.getMode(2, this.group.migrationMode)}</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Software packages mode</ControlLabel>
              <FormControl componentClass="select" placeholder={this.group.softwarePackagesMode} onChange={this.onChangeSoftwarePackagesMode}>
                <option value={this.getValue(1, this.group.softwarePackagesMode)}>{this.getMode(1, this.group.softwarePackagesMode)}</option>
                <option value={this.getValue(2, this.group.softwarePackagesMode)}>{this.getMode(2, this.group.softwarePackagesMode)}</option>
              </FormControl>
            </FormGroup>
            <ControlLabel>Users</ControlLabel>
            { userForm }
            <br />
          <LinkContainerButton buttonBsStyle='default' buttonText='Edit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

EditGroup.propTypes = {
  state: React.PropTypes.object,
  editGroupRequest: React.PropTypes.func,
  getUsersRequest: React.PropTypes.func,
};
