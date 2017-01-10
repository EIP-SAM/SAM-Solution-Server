//
// Component migration mode group rights form edit group
//

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from 'components/EditGroup/styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class EditGroupFormGroupRightsMigrationMode extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeMigrationMode = this.onChangeMigrationMode.bind(this);
  }

  onChangeMigrationMode(event) {
    this.props.migrationModeChange(Number(event.target.value));
  }

  render() {
    return (
      <FormGroup controlId="migrationMode" className={styles.form}>
        <ControlLabel>Migration mode</ControlLabel>
        <FormControl componentClass="select" value={this.props.migrationMode} onChange={this.onChangeMigrationMode}>
          <option value="1">Simple</option>
          <option value="2">Advanced</option>
        </FormControl>
      </FormGroup>
    );
  }
}

EditGroupFormGroupRightsMigrationMode.propTypes = {
  migrationMode: React.PropTypes.number,
  migrationModeChange: React.PropTypes.func,
};
