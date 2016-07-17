//
// Component EditGroup
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import { LinkContainerButton } from '../Button';
import styles from './styles.css';

export class EditGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeSaveAndRestoreMode = this.onChangeSaveAndRestoreMode.bind(this);
    this.onChangeMigrationMode = this.onChangeMigrationMode.bind(this);
    this.onChangeSoftwarePackagesMode = this.onChangeSoftwarePackagesMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const groupname = window.location.pathname.split('/')[2];
    this.props.getGroupRequest(groupname);
  }

  onChangeGroupname(event) {
    this.props.onChangeData(event.target.value, this.props.state.saveAndRestoreMode, this.props.state.migrationMode, this.props.state.softwarePackagesMode);
  }

  onChangeSaveAndRestoreMode(event) {
    this.props.onChangeData(this.props.state.groupname, event.target.value, this.props.state.migrationMode, this.props.state.softwarePackagesMode);
  }

  onChangeMigrationMode(event) {
    this.props.onChangeData(this.props.state.groupname, this.props.state.saveAndRestoreMode, event.target.value, this.props.state.softwarePackagesMode);
  }

  onChangeSoftwarePackagesMode(event) {
    this.props.onChangeData(this.props.state.groupname, this.props.state.saveAndRestoreMode, this.props.state.migrationMode, event.target.value);
  }

  handleClick(event) {
    this.props.editGroupRequest(this.props.state.groupname, this.props.state.saveAndRestoreMode, this.props.state.migrationMode, this.props.state.softwarePackagesMode);
  }

  render() {
    return (
      <div container className={styles.editGroup}>
        <form>
          <PageHeader>Edit Group</PageHeader>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Group name</ControlLabel>
            <FormControl type="text" value={this.props.state.displayedGroupname} onChange={this.onChangeGroupname} />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Save and restore mode</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.props.state.displayedSaveAndRestoreMode} onChange={this.onChangeSaveAndRestoreMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Migration mode</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.props.state.displayedMigrationMode} onChange={this.onChangeMigrationMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Software packager mode</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.props.state.displayedSoftwarePackagesMode} onChange={this.onChangeSoftwarePackagesMode}>
                <option value='1'>Simple</option>
                <option value='2'>Advanced</option>
              </FormControl>
            </FormGroup>
            <LinkContainerButton buttonType='default' buttonText='Submit' onClick={this.handleClick} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

EditGroup.propTypes = {
  state: React.PropTypes.object,
  editGroupRequest: React.PropTypes.func,
  onChangeData: React.PropTypes.func,
};
