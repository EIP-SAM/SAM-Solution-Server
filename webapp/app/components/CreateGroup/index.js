//
// Component CreateGroup
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import styles from './styles.css';

export class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.group = {};
    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeSaveAndRestoreMode = this.onChangeSaveAndRestoreMode.bind(this);
    this.onChangeMigrationMode = this.onChangeMigrationMode.bind(this);
    this.onChangeSoftwarePackagesMode = this.onChangeSoftwarePackagesMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    var groups = [];
    groups.push(this.group);
    this.props.createGroupRequest(groups);
  }

  render() {
    this.group.saveAndRestoreMode = 1;
    this.group.migrationMode = 1;
    this.group.softwarePackagesMode = 1;
    return (
      <div container className={styles.createGroup}>
        <form>
          <PageHeader>Create Group</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Group name</ControlLabel>
            <FormControl type="text" placeholder='Enter group name' onChange={this.onChangeGroupname} />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Save and restore mode</ControlLabel>
              <FormControl componentClass="select" onChange={this.onChangeSaveAndRestoreMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Migration mode</ControlLabel>
              <FormControl componentClass="select" onChange={this.onChangeMigrationMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Software packages mode</ControlLabel>
              <FormControl componentClass="select" onChange={this.onChangeSoftwarePackagesMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <br />
            <LinkContainerButton buttonType='default' buttonText='Create' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

CreateGroup.propTypes = {
  state: React.PropTypes.object,
  createGroupRequest: React.PropTypes.func,
}
